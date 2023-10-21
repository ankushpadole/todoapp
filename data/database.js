import mongoose from "mongoose";

//Database Connection
export const connectDB=()=>{ mongoose.connect(process.env.MONGO_URI,{
  dbName:"api" 
}).then((c)=>console.log(`database is connected with ${c.connection.host}`)).catch((err)=>console.log(err));}