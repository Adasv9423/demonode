import { User } from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const JWT_SECRET="AFgsdvhasjfbsdjfbbsdnbdsvs"
export const getAllusers=async (req,res)=>{
    const users=await User.find({})
    console.log(req.query)
    res.status(201).json({
        "success":true,
        users
        
    }
    );
 }
 export const register=async (req,res,next)=>{
    const {name,email,Password}=req.body
    let user = await User.findOne({email})
    if(user)
    {
        return next( new Error("nice"))
    }
    const hashedPassword= await bcrypt.hash(Password,10)
    user=await User.create({name,email,Password:hashedPassword})
   // const token= jwt.sign({_id:user._id},process.env.JWT_SECRET)
    res.json(201).json({
        success:"True",
        message:"registered successfully"
    })
    // const {name,email,Password}=req.body
    // await User.create({name,email,Password})
    // res.status(201).cookie("hi","hello").json({
    //     "success":true,
        
        
    // }
    // );
}
export const login=async (req,res)=>{
    // const {name,email,Password}=req.body
    // await User.create({name,email,Password})
    // res.status(201).cookie("hi","hello").json({
    //     "success":true,
        
        
    // }
    // );
}