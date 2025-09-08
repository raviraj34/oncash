import  express, { NextFunction } from "express";
import { usermodel } from "../db";
const userRouter =express.Router();
export const jwt_secret= "raviraj@123";
import jwt from "jsonwebtoken";
import { authmiddeware } from "./middleware";
export default userRouter;

userRouter.post("/signup" ,async(req,res)=>{
    const {firstname,lastname,password,email} =req.body;

    const user = await usermodel.create({
        firstname,
        lastname,
        password,
        email
    })

    if(user){
        const token =jwt.sign({
            id:user._id
        }, jwt_secret)
    }

    if(user._id){
        res.json({
            message:"user already exist"
        })
    }

    res.json({
        message:"signup complete"
    })

} )
//@ts-ignore
userRouter.put("/update", authmiddeware, async (req,res)=>{
    const {firstname,lastname,email,password} =req.body;

    await usermodel.updateOne(req.body, {
        id:req.userId
    })

    res.json({
        message:"updation succesfull"
    })
})


