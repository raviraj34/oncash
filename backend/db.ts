import mongoose from "mongoose";

mongoose.connect("");

const schema = mongoose.Schema;

const userschema  = new schema ({
    username: String,
    password: String
})


export const usermodel = mongoose.model("users", userschema)