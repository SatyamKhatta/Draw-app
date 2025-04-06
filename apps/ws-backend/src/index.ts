// import {WebSocketServer} from "ws";
import { WebSocket, WebSocketServer } from "ws";  // Import WebSocket from ws
import jwt, { JwtPayload } from "jsonwebtoken"
// import { JWT_SECRET } from "@repo/backend-common/config";
const { JWT_SECRET } = require("@repo/backend-common/config");
const { prismaClient } = require("@repo/db/client");

const wss = new WebSocketServer({port:8080})
console.log("WebSocket server started on port 8080");

interface User{
  ws:WebSocket,
  rooms:string[],
  userId:string
}
const users:User[]=[];

function checkUser(token:string):string | null{
  
  try{
    const decoded = jwt.verify(token,JWT_SECRET);

  if(typeof decoded == "string" ){
   
    return null;
  }
  if(!decoded || !decoded.userId){
    return null;
  }
  return decoded.userId;
  }catch(e) {
    return null;
  }
  return null;
}

wss.on("connection",function connection(ws,request) {

const url= request.url;   //ws://localhost:3000?token=1234567

if(!url){
    return;
}
  const queryParams= new URLSearchParams(url.split('?')[1])
  const token = queryParams.get('token') || "";

  const userId=checkUser(token);


  if(userId == null) {
    ws.close();
    return null;
  }

  users.push({
    userId,
    rooms:[],
    ws
  })
    ws.on("message",async function message(data) {
      const ParsedData = JSON.parse(data as unknown as string);
    
      if (ParsedData.type === "join_room") {
        const user = users.find(x => x.ws == ws);
        user?.rooms.push(ParsedData.roomId);
      }
    
      if (ParsedData.type === "leave_room") {
        const user = users.find(x => x.ws == ws);
        if (!user) {
          return;
        }
        user.rooms = user.rooms.filter(x => x !== ParsedData.roomId);
      }
    
      if (ParsedData.type === "chat") {
        const roomId = ParsedData.roomId;
        const message = ParsedData.message;
    
        await prismaClient.chat.create({
          data: {
            roomId,
            message,
            userId
          }
        })

        users.forEach(user => {
          if (user.rooms.includes(roomId)) {
            user.ws.send(JSON.stringify({
              type: "chat",
              message: message,
              roomId
            }));
          }
        });
      }
    });
    
});