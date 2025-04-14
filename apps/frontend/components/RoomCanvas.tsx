"use client";

import { WS_URL } from "@/config";
import { initDraw } from "@/draw";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "./Canvas";

export function RoomCanvas({roomId}: {roomId:string}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [socket,setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const ws =  new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzU0Y2NjZS02YTA3LTRkMWYtOTZjYi0wZTQ0M2UzMDdkM2YiLCJpYXQiOjE3NDQ2NTE3Mjl9.eIGdyE-AXxwUuyzfqbWhcLaef1D_QG-GRDqSd2VFpsc`)
        ws.onopen=()=>{
            setSocket(ws);
            ws.send(JSON.stringify({
                type:"join_room",
                roomId
            }))
        }
    })
   

    if(!socket) {
        return <div>
            Connecting to Server....
        </div>
    }
    
return <div>
    <Canvas roomId = {roomId} socket={socket}/>
</div>
}