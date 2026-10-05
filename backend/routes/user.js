

import express from "express";
import {signup,login,getUserProfile,updateUserProfile,deleteUserProfile} from "../controller/usercont.js";

let userRouter = express.Router();


userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/userProfile/:id", getUserProfile);
userRouter.put("/updateProfile/:id", updateUserProfile);
userRouter.delete("/deleteProfile/:id", deleteUserProfile);

export default userRouter;

