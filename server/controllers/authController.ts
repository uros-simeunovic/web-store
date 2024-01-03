import { Request, Response } from "express";
import User from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req: Request, res: Response) => {
    try {
        const { firstname, lastname, email, mobile, password } = req.body;
    
        const user = await User.findOne({email: email});
    
        if (user) {
            return res.status(500).json({
                message: "User already exists!"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstname,
            lastname,
            email,
            mobile,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        res.status(200).json({
            message: "Registration successful!",
            user: savedUser
        });
    } catch (error) {
        console.log(error);
    }
} 

const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        
        if(!email || !password) {
            return res.status(400).json({
                message: "Enter all fields"
            });
        }

        const user = await User.findOne({email});

        if(!user) {
            return res.status(504).json({
                message: "User not found"
            });
        }

        const correctPassword = await bcrypt.compare(password, user.password);

        if(!correctPassword) {
            return res.status(401).json({
                message: "Incorrect password"
            });
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET as string, { expiresIn: "1d" });

        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: false,
            maxAge: 86400000,
        });
        
        res.status(200).json({ userId: user._id});
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong"});
    }
}

const logout = (req: Request, res: Response) => {
    
    res.json(req.body);
}

export default {
    register,
    login,
    logout
}