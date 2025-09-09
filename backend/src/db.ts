import mongoose from "mongoose";
mongoose.connect("");

const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


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
    },
    userId:ObjectId
})


const accountSchma  = new schema({
    userId :{
        type: ObjectId,
        required: true,
        ref:'users'
    },
    balance:{
        type: Number,
        required: true
    }

})
export const accountmodel = mongoose.model("accounts",accountSchma)
export const usermodel = mongoose.model("users", userschema)