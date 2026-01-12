import {Router} from "express";
import {PrismaClient} from "@prisma/client";
import { JWT_PASS } from "../config";
import jwt from "jsonwebtoken"
const prismaClient = new PrismaClient();
export const userRouter = Router();
userRouter.post("/signup",async(req,res)=>{
   const {username,password,name} = req.body;
  try{
    await prismaClient.user.create({
        data:{
            username,
            password,
            name
        }
    })
    res.json({
        message : "signedup succesfully"
    })
  }catch(e){
    return res.status(403).json({
        message : "error while signing up"
    })
  }
})
userRouter.post("/signin",async(req,res)=>{
    const  {username,password} = req.body;
       const merchant = await prismaClient.user.findFirst({
          where:{
           username,
           password
          }
       })
       if(!merchant){
           return res.status(403).json({
               message : "unable to login"
           })
       }
       const token = jwt.sign({
           id: user.id
       },JWT_PASS)
   
       return res.json({
           token
       })
})