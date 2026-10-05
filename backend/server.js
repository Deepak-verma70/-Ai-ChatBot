import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
let app = express();
let port = 8080;
app.use(express.json());
app.use(cors());

import threadRouter from "./routes/thread.js";
import userRouter from "./routes/user.js";

app.use("/",threadRouter);
app.use("/",userRouter);

app.listen(port,()=>{
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
  
    res.send(data);
  }catch(err){
    console.log(err.message);
  }
}
);


