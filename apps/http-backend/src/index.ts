import express from "express";
import  Jwt  from "jsonwebtoken";
// import {JWT_SECRET} from "@repo/backend-common/config";
// import {CreateRoomSchema, CreateUserSchema, SigninSchema} from "@repo/common/types"
// import { prismaClient } from "@repo/db/client";

const { JWT_SECRET } = require("@repo/backend-common/config");
import { middleware } from "./middleware";
const {CreateRoomSchema, CreateUserSchema, SigninSchema} = require("@repo/common/types")
const { prismaClient } = require("@repo/db/client");



const app = express();

app.use(express.json())
app.post("/signup",(req,res)=>{

    const parsedData= CreateUserSchema.safeParse(req.body);
    if(!parsedData.success) {
        res.json({
            message:"incorrect inputs"
        })
        return; 
    }
  try {
    prismaClient.user.create({
        data: {
         email:parsedData.data?.username,
         password:parsedData.data?.password,
         name:parsedData.data?.name,
        }
     })
    
     // db call
     res.json({
         userId:"123"
     })
  } catch (error) {
    res.status(411).json({
        message: "Email is alraedy exits",
    })
    
  }
})

app.post("/signin",(req,res)=>{

    const data= SigninSchema.safeParse(req.body);
    if(!data.success) {
        res.json({
            message:"incorrect inputs"
        })
        return; 
    }

    const userId=1;
 const token=   Jwt.sign({
        userId,
    },JWT_SECRET);

    res.json({
        token
    })
})

app.post("/room",middleware,(req,res)=> {

    const data= CreateRoomSchema.safeParse(req.body);
    if(!data.success) {
        res.json({
            message:"incorrect inputs"
        })
        return; 
    }

    // db call
    res.json({
        roomId:"123"
    })
})
app.listen(3000);