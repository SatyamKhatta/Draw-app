import express from "express";
import  Jwt  from "jsonwebtoken";
// import {JWT_SECRET} from "@repo/backend-common/config";
// import {CreateRoomSchema, CreateUserSchema, SigninSchema} from "@repo/common/types"
// import { prismaClient } from "@repo/db/client";

const { JWT_SECRET } = require("@repo/backend-common/config");
import { middleware } from "./middleware";
const {CreateRoomSchema, CreateUserSchema, SigninSchema} = require("@repo/common/types")
const { prismaClient } = require("@repo/db/client");
import cors from "cors"

const app = express();
app.use(cors())

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

// app.post("/room",middleware,async(req,res)=> {

//     const parsedData= CreateRoomSchema.safeParse(req.body);
//     if(!parsedData.success) {
//         res.json({
//             message:"incorrect inputs"
//         })
//         return; 
//     }
//     // @ts-ignore
//     const userId = req.userId;
//     try{
//         const room=  await prismaClient.room.create({
//             data :{
//                 slug:parsedData.data.name,
//                 adminId:userId
//             }
//          })
        
//         res.json({
//             roomId:room?.id
//         })
//     }catch(e) {
//         res.json({
//             message: "Room already exits with this name"
//         })
//     }
  
// })

// app.post("/room", middleware, async (req, res) => {
//     const parsedData = CreateRoomSchema.safeParse(req.body);
//     if (!parsedData.success) {
//         res.json({
//             message: "Incorrect inputs"
//         })
//         return;
//     }
//     // @ts-ignore: TODO: Fix this
//     const userId = req.userId;

//     try {
//         const room = await prismaClient.room.create({
//             data: {
//                 slug: parsedData.data.name,
//                 adminId: userId
//             }
//         })

//         res.json({
//             roomId: room.id
//         })
//     } catch(e) {
//         res.status(409).json({
//             message: "Room already exists with this name"
//         })
//     }
// })

import { Request, Response } from "express";

app.post("/room", middleware, async (req: Request, res: Response) => {
    const parsedData = CreateRoomSchema.safeParse(req.body);

    if (!parsedData.success) {
        console.log("❌ Invalid inputs:", parsedData.error);
        res.status(400).json({
            message: "Incorrect inputs",
            error: parsedData.error
        });
        return; // ✅ Ends the function
    }

    // @ts-ignore
    const userId = req.userId;
    console.log("🧠 userId from middleware:", userId);

    if (!userId) {
        res.status(401).json({
            message: "Unauthorized: userId not found"
        });
        return;
    }

    const slug = parsedData.data.name;

    try {
        const existingRoom = await prismaClient.room.findUnique({
            where: { slug: slug }
        });

        if (existingRoom) {
            console.log("⚠️ Duplicate room:", slug);
            res.status(409).json({
                message: "Room already exists with this name"
            });
            return;
        }

        const room = await prismaClient.room.create({
            data: {
                slug: slug,
                adminId: userId
            }
        });

        console.log("✅ Room created:", room);
        res.status(200).json({
            roomId: room.id
        });

    } catch (e: any) {
        console.error("🔥 Prisma error:", e);
        res.status(500).json({
            message: "Something went wrong",
            error: e?.message || e
        });
    }
});



app.get("/chats/:roomId",async(req,res)=>{
    const roomId= Number(req.params.roomId);

    try{
        console.log(req.params.roomId)
        const messages=await prismaClient.chat.findMany({
            where:{
                roomId: roomId
            },
            orderBy:{
                id:"desc"
            },
            take:50 
        });
        res.json({
            messages
        })
    }catch(e){
        console.log(e)
      res.json({
        messages:[]
      })
    }
    
})

app.get("/room/:slug",async(req,res)=>{
    const slug= req.params.slug;
    const room= await prismaClient.room.findFirst({
        where:{
            slug
        }
    });
    res.json({
        room
    })
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});