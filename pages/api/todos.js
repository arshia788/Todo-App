import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import {getSession} from 'next-auth/react'

export default async function handler(req,res){

    if(req.method ==="POST"){

        try {
            await connectDB()
        } catch (error) {
            res.status(500).json({status:'failed', message:"failed to connect to DB"})
        }


        const session= await getSession({req});

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

    }else if(req.method === "GET"){

    }
};