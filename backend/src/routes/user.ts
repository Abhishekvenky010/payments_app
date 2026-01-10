import {Router} from "express";
export const userRouter = Router();
userRouter.post("/signup",(req,res)=>{
   username : req.body.username;
   password: req.body.password;
   name : req.body.name
})
userRouter.post("/signin",(req,res)=>{
    username : req.body.username;
   password: req.body.password;
})