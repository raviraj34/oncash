import express from "express";
import { usermodel } from "./db";
import mainroute from "./routes";
import userRouter from "./routes/user";
import cors from "cors"
const app  = express();
app.use(express.json());
app.use(cors());



app.use("/api/v1", mainroute)


app.listen(3000);