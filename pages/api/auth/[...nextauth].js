import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import User from '@/models/User';
import connectDB from '@/utils/connectDB';
import { verifyPassword } from '@/utils/auth';


// ? mesle fasle ghabl chiz khasi nist. 

const authOptions={
  session:{strategy:'jwt'},
  providers:[
    CredentialsProvider({
      async authorize(credentials, req){

        const {email, password}= credentials;

        try {
          await connectDB()
        } catch (error) {
          throw new Error('Failed to connect to DB')
        }

        if(!email || !password){
          throw new Error("Invalid Data!")
        }

        const user= await User.findOne({email})

        if(!user) throw new Error("No user exists")

        const isValid= await verifyPassword(password, user.password)

        if(!isValid) throw new Error("email or password is wrong");

        return{email};
      }
    })
  ]

}

export default NextAuth(authOptions)