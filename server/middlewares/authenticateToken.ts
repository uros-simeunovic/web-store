import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies;
    console.log(token);
    next();
}

export default authenticateToken;