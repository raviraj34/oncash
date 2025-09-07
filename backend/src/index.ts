import express from "express";
import { usermodel } from "./db";

const app  = express();
app.use(express.json());

app.post("/api/signup", (req,res)=>{

const {email, password} = req.body;

const user = usermodel.create({
    email,
    password
})

})