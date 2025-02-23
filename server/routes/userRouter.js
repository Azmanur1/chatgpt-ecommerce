import express, { Router } from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/userController.js";
import { protect,isAdmin } from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);

userRouter.get('/profile',protect,(req,res)=>{
    res.json(req.user);
});
userRouter.get('/admin',protect,isAdmin,(req,res)=>{
    res.json({message:"welcome Admin!"});
});

export default userRouter;
