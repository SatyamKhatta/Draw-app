import { useEffect, useState } from "react";
import { WS_URL } from "../config";

// export function useSocket() {
//     const [loading, setLoading] = useState(true);
//     const [socket, setSocket] = useState<WebSocket>();

//     useEffect(() => {
//         const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNDMzOTdjMy01OTNkLTQwMjctYjExNC0yOTAyNGJhYjAyMTgiLCJpYXQiOjE3MzY2OTczMzB9.BxDMP3FqBsM6TrZcAGYFRA2FlmazFwQJ78mOHskatiM`);
//         ws.onopen = () => {
//             setLoading(false);
//             setSocket(ws);
//         }
//         ws.onclose = () => {
//             console.warn("WebSocket closed. Trying to reconnect...");
//             // Optional: add retry logic here
//         };
    
//         ws.onerror = (e) => {
//             console.error("WebSocket error", e);
//         };
    
//         return () => {
//             ws.close(); // clean up when unmounting
//         };
//     }, []);

//     return {
//         socket,
//         loading
//     }

// }

export function useSocket() {
    const [socket, setSocket] = useState<WebSocket>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let ws: WebSocket;

        const connect = () => {
            ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzU0Y2NjZS02YTA3LTRkMWYtOTZjYi0wZTQ0M2UzMDdkM2YiLCJpYXQiOjE3NDQwMTUxODV9.WShM9pCXSOi3kLnH8i5zBx_zTURVu8EqqfIXS7Iu8wI`);

            ws.onopen = () => {
                console.log("WebSocket connected ✅");
                setLoading(false);
                setSocket(ws);
            };

            ws.onclose = () => {
                console.warn("WebSocket closed ❌. Reconnecting...");
                setLoading(true);
                setTimeout(connect, 3000); // try to reconnect every 3s
            };

            ws.onerror = (err) => {
                console.error("WebSocket error: ", err);
                ws.close();
            };
        };

        connect();

        return () => {
            ws?.close();
        };
    }, []);

    return { socket, loading };
}
