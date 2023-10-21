import cookieParser from "cookie-parser";
import { config } from "dotenv";
import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
export const app = express();
//middleware for sending body data in JSon format
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true

}));
//using Routes
app.use(userRouter);
app.use(taskRouter);




config({
    path:"./data/config.env"
})



console.log("Developer Name: Ankush Padole")


app.get('/',(req,res)=>{
    res.send("Working");
})

app.use(errorMiddleware)
