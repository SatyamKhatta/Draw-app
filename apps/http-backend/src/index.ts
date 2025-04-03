import express from "express";
import  Jwt  from "jsonwebtoken";
// import {JWT_SECRET} from "@repo/backend-common/config";
// import {CreateRoomSchema, CreateUserSchema, SigninSchema} from "@repo/common/types"
// import { prismaClient } from "@repo/db/client";

const { JWT_SECRET } = require("@repo/backend-common/config");
import { middleware } from "./middleware";
import { todo } from "node:test";
const {CreateRoomSchema, CreateUserSchema, SigninSchema} = require("@repo/common/types")
const { prismaClient } = require("@repo/db/client");

const app = express();

app.use(express.json())
app.post("/signup",async(req,res)=>{

    const parsedData= CreateUserSchema.safeParse(req.body);
    if(!parsedData.success) {
        res.json({
            message:"incorrect inputs"
        })
        return; 
    }
  try {
 const user =  await prismaClient.user.create({
        data: {
         email:parsedData.data?.username,
         password:parsedData.data?.password,
         name:parsedData.data?.name,
        }
     })
    
     // db call
     res.json({
         userId:user.id
     })
  } catch (error) {
    res.status(411).json({
        message: "Email is alraedy exits",
    })
    
  }
})

app.post("/signin",async(req,res)=>{

    const parsedData= SigninSchema.safeParse(req.body);
    if(!parsedData.success) {
        res.json({
            message:"incorrect inputs"
        })
        return; 
    }

    // TODO : compare the hashed password here 
    const user=await prismaClient.user.findFirst({
        where:{
            email:parsedData.data.username,
            password:parsedData.data.password
        }
    })
        if(!user){
            res.status(403).json({
                message:"Not Authorized"
            })
            return;
        }

 const token=   Jwt.sign({
        userId:user?.id
    },JWT_SECRET);

    res.json({
        token
    })
})

app.post("/room",middleware,async(req,res)=> {

    const parsedData= CreateRoomSchema.safeParse(req.body);
    if(!parsedData.success) {
        res.json({
            message:"incorrect inputs"
        })
        return; 
    }
    // @ts-ignore
    const userId = req.userId;
   const room=  await prismaClient.room.create({
        data :{
            slug:parsedData.data.name,
            adminId:userId
        }
     })
    
    res.json({
        roomId:room?.id
    })
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});