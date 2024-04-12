import mongoose, { Mongoose } from "mongoose"
const schema=new mongoose.Schema({
    title:String,
    description:{
       type: String, 
    },
    iscompleted:{
        type:Boolean,
        default:false
    },
    user:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,

    }
}
)
export const Task=mongoose.model("task",schema)