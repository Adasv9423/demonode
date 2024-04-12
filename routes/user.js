import express from "express"
import { User } from "../models/user.js"
import { getAllusers, register,login } from "../controllers/user.js"
const router =express.Router()
router.get("/all",getAllusers)
router.get("/userid/:id",async (req,res)=>{
    const {id}=req.params
    const user= await User.findById(id)
    console.log(req.query)
    res.status(201).json({
        "success":true,
        user
        
    }
    );
 })
 router.post("/new",register)
 router.post("/login",login)

export default router
