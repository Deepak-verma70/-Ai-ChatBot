
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


import User from "../models/user.js";

const signup = async(req,res) => {
    const {name,password,email} = req.body;
    try{
      
        
        let user = await User.findOne({name});
        if(user){
           return res.status(400).json({message:"user already exists!"});
        }
        let salt = await bcrypt.genSalt(10);
        let hashpassword = await bcrypt.hash(password,salt);

        let newUser = new User({
            name,
            password:hashpassword,
            email
        });

        let result = await newUser.save();
        
       const token = jwt.sign({id:result._id},process.env.JWT_KEY, {expiresIn:"1h"});

       res.cookie("accesstoken",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"strict",
        maxAge:3*60*60*1000
       });

        res.status(201).json({
  success: true,
  message: "User registered successfully",
  data: {
    user: {
      id: result._id,
      name: result.name,
      email: result.email
    }
  }
});

    }
    catch(err){
        console.log("error during signup:", err.message);
        res.status(500).send("server error");
    }
} 


const login = async(req,res) => {
    const {email,password} = req.body;
    try{
      
        
        let user = await User.findOne({email});
        if(!user){
           return res.status(400).json({message:"invalid credential"});
        }

        let match  = await bcrypt.compare(password,user.password);
        if(!match){
          return  res.status(400).json({message:"invalid credential"});
        }

        const token = jwt.sign({id:user._id},process.env.JWT_KEY,{expiresIn:"1h"});
         res.cookie("accesstoken",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"strict",
        maxAge:3*60*60*1000
       });

        res.json({success:true,message:"user login successfully"}); 


    }
    catch(err){
        console.log("error during login:",err.message);
        res.status(500).send("server error");
    }
}


const getUserProfile = async(req,res)=> {
    let {id} = req.params;
    try{
        
        let user = await User.findOne({_id: id});

          if(!user){
          return  res.status(404).json({success:false,message:"user not found"});
        }
        res.json({success:true,message:"user fetched successfully"});
    }
    catch(err){
        console.log("error during fetching:",err.message);
        res.status(500).send("server error");
    }
} 

const updateUserProfile = async(req,res)=> {
    let {id} = req.params;
    const {email,password,name} = req.body;
    
    try{
    
        let updateFields = {email,name};
        if(password){
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password,salt);
            updateFields.password = hashPassword;
        }

        const result = await User.findOneAndUpdate({_id:id},{$set:updateFields},{returnDocument:"after"});

        if(!result){
            return res.status(404).json({message:"user not found"});
        }
        
        res.send(result);

    }
    catch(err){
         console.log("error during updating:",err.message);
        res.status(500).send("server error");

    }
    
} 

const deleteUserProfile = async(req,res)=> {
    let {id} = req.params;
    try{
    
        const result = await User.deleteOne({_id:id});

        if(result.deleteCount == 0){
            return res.status(404).json({message:"user not found"});
        }
    
        res.json({message:"user profile delete"},result.deleteCount);
    }
     catch(err){
         console.log("error during delete:",err.message);
        res.status(500).send("server error");
    } 
} 




export {signup,login,getUserProfile,updateUserProfile,deleteUserProfile};