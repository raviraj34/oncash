import  express, { Router }  from "express"
import userRouter from "./user";

const mainroute =express.Router();
mainroute.use("/user" ,userRouter)
export default mainroute;
