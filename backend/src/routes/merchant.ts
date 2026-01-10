import {Router} from "express";
export const merchantRouter = Router();
merchantRouter.post("/signup",(req,res)=>{
   username : req.body.username;
   password: req.body.password;
   name : req.body.name
})
merchantRouter.post("/signin",(req,res)=>{
    username : req.body.username;
   password: req.body.password;
})