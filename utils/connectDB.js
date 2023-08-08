import mongoose from "mongoose";

const connectDB= async()=>{
    if(mongoose.connections[0].readyState) return;
    console.log("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI)
    console.log(" connected to DB");
}

export default connectDB;