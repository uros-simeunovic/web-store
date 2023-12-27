import express from "express";
import authController from "../controllers/authController";

const router = express.Router();

router
    .post("/register", authController.register)
    .post("/login", authController.login)
    .post("/logout", authController.logout)

export default router