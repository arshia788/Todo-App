import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import {getSession} from 'next-auth/react'
import { sortTodos } from "@/utils/sortTodos";

export default async function handler(req,res){

    if(req.method ==="POST"){

        try {
            await connectDB()
        } catch (error) {
            res.status(500).json({status:'failed', message:"failed to connect to DB"})
        }


        const session= await getSession({req});
        console.log(session);

        if(!session){
            return res.status(401).json({status:'failed', message:"You are not Logged in."})
        }

        const user= await User.findOne({email:session.user.email})

        if(!user) {
            return res.status(404).json({status:'failed', messsage:"No user exists."})
        }

        if(req.method === "POST"){
            const {title, status}= req.body;

            if(!title || !status){
                return res.status(422).json({status:"failed", message:"Invalid data"})
            }


            user.todos.push({title, status})
            user.save();

            res.status(201).json({status:'success', message:"Todo created!. "})
        }

    }
    
    else if(req.method === "GET"){
        try {
            await connectDB()
        } catch (error) {
            res.status(500).json({status:'failed', message:"failed to connect to DB"})
        }

        const session= await getSession({req});
        const user= await User.findOne({email:session.user.email})
        const sortedData= sortTodos(user.todos);
        res.status(200).json({status:'success', data:{todos:sortedData}})
    }

    else if (req.method === "PATCH"){

        try {
            await connectDB()
        } catch (error) {
            res.status(500).json({status:'failed', message:"failed to connect to DB"})
        }

        const {id, status}= req.body;

        if(!id || !status){
            return res.status(422).json({status:'failed', message:"Invalid data!"})
        }
        

        // alan mikhy on User ro yeki az object hash ro update bokoni pas miay be in halat on todos ro migiri ba on id ke dareh.


        // hala ke omadi in ro gerefti vaght update kardan status hast.
        // ? ba $set migi chi kar mikhay bokoni. chi set beshe -- che megdari-- dar koja. 
        // ? omadi gofti in todos.$.status yani hamini ke alan peda kardi 

        const result= await User.updateOne({"todos._id":id}, {$set:{"todos.$.status":status}});

        console.log(result);

        res.status(200).json({status:'success'})
    }
};