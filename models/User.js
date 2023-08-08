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
        // khodet dari migi ke har todo ham title dareh ham status 
        // status yani to kodom vazait hast. 
        {title:String, status:String}
    ],
    createdAt:{
        type:Date,
        default:()=> Date.now(),
        immutable:true,
    }
    
});

const User= models.User || model("User", userSchema);

export default User;