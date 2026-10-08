import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
let app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

import threadRouter from "./routes/thread.js";
import userRouter from "./routes/user.js";

app.use("/",threadRouter);
app.use("/",userRouter);

app.listen(process.env.PORT,()=>{
  console.log("server start");
  connectiondb();
})

const connectiondb = async()=>{
  try{
   await  mongoose.connect(process.env.MONGODB_KEY);
   console.log("connection success");
  }catch(err){
    console.log("connection failed",err);
  }}





app.post("/test",async (req,res)=>{
  let option = {
   method:"POST",
   headers:{
    "content-type":"application/json",
    "x-goog-api-key":process.env.GEMINI_API_KEY 
    },
    body:JSON.stringify({
      model:"gemini-3.8-flash",
        role:"user",
        input:req.body.message

    })
  };

  try{
    let response = await fetch("https://generativelanguage.googleapis.com/v1beta/interactions",option);
    const data = await response.json();
  
    res.send(data.steps[1].content[0].text);
  }catch(err){
    console.log(err.message);
  }
}
);


