import mongoose from "mongoose";

mongoose.connect("");

const schema = mongoose.Schema;

const userschema  = new schema ({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


export const usermodel = mongoose.model("users", userschema)