import { Schema, model, models } from "mongoose";


const userSchema= new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
    },
    lastName:{
        type:String
    }
    ,
    todos:[
        {title:String, 
        status:String, 
        info:String}
    ],

    
    createdAt:{
        type:Date,
        default:()=> Date.now(),
        immutable:true,
    }
    
});

const User= models.Todos || model("Todos", userSchema);

export default User;