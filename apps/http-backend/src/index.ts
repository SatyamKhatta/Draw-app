import express from "express";
import  Jwt  from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import {CreateRoomSchema, CreateUserSchema, SigninSchema} from "@repo/common/types"

const app = express();

app.post("/signup",(req,res)=>{

    const data= CreateUserSchema.safeParse(req.body);
    if(!data.success) {
        res.json({
            message:"incorrect inputs"
        })
        return; 
    }
   
    // db call
    res.json({
        userId:"123"
    })
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