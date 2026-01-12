import {Router} from "express";
import {PrismaClient} from "@prisma/client";
import jwt from "jsonwebtoken";
import { JWT_PASS } from "../config";
const prismaClient = new PrismaClient();
export const merchantRouter = Router();
merchantRouter.post("/signup",async (req,res)=>{
  const {username,password,name} = req.body;
  try{
    await prismaClient.merchant.create({
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
merchantRouter.post("/signin",async (req,res)=>{
    const  {username,password} = req.body;
    const merchant = await prismaClient.merchant.findFirst({
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
        id: merchant.id
    },JWT_PASS)

    return res.json({
        token
    })
})