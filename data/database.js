import mongoose from "mongoose";

//Database Connection
export const connectDB=()=>{ mongoose.connect(process.env.MONGO_URI,{
  dbName:"api" 
}).then(()=>console.log("database is connected")).catch((err)=>console.log(err));}