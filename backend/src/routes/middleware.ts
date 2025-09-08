import  jwt from "jsonwebtoken";

import {jwt_secret} from "./user"
import { NextFunction } from "express";
import { usermodel } from "../db";
export const authmiddeware = (req:Request,res:Response,next:NextFunction)=>{
    const authheader = req.headers.get('authorization');

    if(!authheader ||  !authheader.startsWith('Bearer')){
       //@ts-ignore
        res.status(403).json({
            message:"unathorized"
        });
    }
    const token  =authheader?.split(' ' )[1];
    //@ts-ignore
        const decoded =jwt.verify(token ,jwt_secret)

        if(decoded){
            next();
        }else{
            console.log("authentication failed");
            
                      
        }

    

}