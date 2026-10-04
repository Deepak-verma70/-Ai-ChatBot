
import express from "express";
import Thread from "../models/thread.js";

let threadRouter = express.Router();

router.post("/test",async(req,res)=>{

    try{
        const thread = new Thread({
            
            threadId:"xyt",
            title:"code"
        });

        let resp = await thread.save();
        res.send(resp);
    }catch(err){
        console.log(err);
        res.status(500).send("failed to save in db",err);
    }

})

export default threadRouter;