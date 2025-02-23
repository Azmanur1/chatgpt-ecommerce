import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import userRouter from "./routes/userRouter.js";

dotenv.config(1);
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users",userRouter);

app.get('/',(req,res)=>res.send("Api is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Hey Fahim , Your server is running on port ${PORT}`));

