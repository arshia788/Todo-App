import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import {getSession} from 'next-auth/react'
import { sortTodos } from "@/utils/sortTodos";

export default async function handler(req,res){

    if(req.method === "GET"){
        try {
            await connectDB()
        } catch (error) {
            res.status(500).json({status:'failed', message:"failed to connect to DB"})
        }

        const session= await getSession({req})
        
        const {todoId} = req.query;
        console.log(todoId);

        if(!session){
            return res.status(422).json({status:'failed', message:"Not logged In."})
        }

        const user= await User.findOne({email:session.user.email})

        const check = user.todos.filter(item=>{

            const todo= item['_id'] || '';
            const getObject = todo.toString()

            if(getObject === todoId) return item
        })

        

        res.status(200).json({status:'success', data:check})

    }
}
