
import express from "express";
import {chat,deletethread,allThread,threadById} from "../controller/thread.js";

let threadRouter = express.Router();

threadRouter.get("/thread",allThread);
threadRouter.get("/thread/:threadId",threadById);
threadRouter.post("/chat",chat);
threadRouter.delete("/thread/:threadId",deletethread);

export default threadRouter;

