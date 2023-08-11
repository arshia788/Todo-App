import connectDB from "@/utils/connectDB";
import User from "@/models/User";

import {getSession} from 'next-auth/react';
import { verifyPassword } from "@/utils/auth";

export default async function handler(req,res){

    try {
        await connectDB()
    } catch (error) {
        return res.status(500).json({status:'failed', message:"Failed to connect to DB"})
    }

    const session = await getSession({req});

    if(!session){
        return res.status(401).json({status:'failed', message:"You are not Logged in"})
    }

    const user= await User.findOne({email:session.user.email})

    if(!user){
        return res.status(400).json({status:'failed', message:"User doesn't exists"})
    }

    if(req.method === "POST"){

        const {name, lastName, password}= req.body;

        const isValid= await verifyPassword(password, user.password)

        if(!isValid){
            return res.status(422).json({status:'failed', message:"password is wrong"})
        }

        user.name=name;
        user.lastName=lastName;
        user.save();

        res.status(200).json({status:'success', data:{name, lastName:lastName, email:session.user.email}})
    }

    else if(req.method ==="GET"){
        try {
            await connectDB()
        } catch (error) {
            return res.status(500).json({status:'failed', message:"Failed to connect to DB"})
        }

        const session= await getSession({req});

        if(!session){
            return res.status(401).json({status:'failed', message:"You are not Logged in"})
        }

        const user= await User.findOne({email:session.user.email})

        if(!user){
            return res.status(400).json({status:'failed', message:"User doesn't exists"})
        }

        res.status(200).json({status:'success', data:{name:user.name, lastName:user.lastName, email:session.user.email}})

    }
}