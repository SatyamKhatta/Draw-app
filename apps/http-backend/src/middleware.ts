
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
// import { JWT_SECRET } from "@repo/backend-common/config";
const { JWT_SECRET } = require("@repo/backend-common/config");


// Extend Express's Request type
interface AuthenticatedRequest extends Request {
    userId?: string;    // Make it optional to prevent strict errors
  } 

export function middleware(req: AuthenticatedRequest ,res: Response,next: NextFunction) {

    const token = req.headers["authorization"] ?? "";

    const decoded= jwt.verify(token,JWT_SECRET)  as { userId: string };

    if(decoded){
       
        req.userId = decoded.userId;
        next();
    }
    else{
        res.status(403).json({
            message:"Unauthorized" 
        })
    }
}
