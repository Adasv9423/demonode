import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/user.js"
import cors from "cors"
import { config } from "dotenv"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
export const app=express()
app.use(cors)

const uri = "mongodb+srv://adasv9423:XcttjwekIx7ylpII@hi.3lfyjt2.mongodb.net/";
//using middleware
app.use(express.json())
app.use("/api/v1/users",userRouter)
mongoose.connect(uri,{
    dbName:"Backendapi"
}).then(()=>{
    console.log("connected datbase")
})

const router =express.Router()
app.get("/",(req,res)=>{
   res.send("ADARSH") 
})
app.use((err,req,res,next)=>{
    return res.staus(201).json(
        {
            "success":"false"
        }
    )
})
// app.get("/users/all",async (req,res)=>{
//     const users=await User.find({})
//     console.log(req.query)
//     res.status(201).json({
//         "success":true,
//         users
        
//     }
//     );
//  })
//  app.get("/userid/:id",async (req,res)=>{
//     const {id}=req.params
//     const user= await User.findById(id)
//     console.log(req.query)
//     res.status(201).json({
//         "success":true,
//         user
        
//     }
//     );
//  })
//  app.post("/users/new",async (req,res)=>{
//     const {name,email,Password}=req.body
//     await User.create({name,email,Password})
//     res.status(201).cookie("hi","hello").json({
//         "success":true,
        
        
//     }
//     );
//  })
app.listen(4000,()=>{
    console.log("connected")
})
