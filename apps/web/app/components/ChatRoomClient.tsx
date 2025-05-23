"use client";

import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";
export function ChatRoomClient({
    messages,
    id
}: {
    messages: {message: string}[];
    id: string
}) {
    const [chats, setChats] = useState(messages);
    const [currentMessage, setCurrentMessage] = useState("");
    const {socket, loading} = useSocket();

    useEffect(() => {
        if (socket && !loading) {

            alert("joined room msg sent");

            socket.send(JSON.stringify({
                type: "join_room",
                roomId: id
            }));

            socket.onmessage = (event) => {
                console.log("Incoming:", event.data);
                const parsedData = JSON.parse(event.data);
                if (parsedData.type === "chat") {
                    setChats(c => [...c, {message: parsedData.message}])
                }
            }
        }
    }, [socket, loading, id])

    return <div>
        {/* {chats.map(m => <div>{m.message}</div>)} */}
        {chats.map((m, idx) => (
    <div key={idx}>{m.message}</div>
     ))}


        <input type="text" value={currentMessage} onChange={e => {
            setCurrentMessage(e.target.value);
        }}></input>
        {/* <button onClick={() => {
            socket?.send(JSON.stringify({
                type: "chat",
                roomId: id,
                message: currentMessage
            }))

            setCurrentMessage("");
        }}>Send message</button> */}

<button
  onClick={() => {
    if (socket?.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({
        type: "chat",
        roomId: id,
        message: currentMessage
      }));
      setCurrentMessage("");
    } else {
      alert("Socket not connected");
    }
  }}
>
  Send message
</button>


    </div>
}