import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import productsRouter from "./routes/productsRouter";
import authRouter from "./routes/authRouter"
import authenticateToken from "./middlewares/authenticateToken";
import "./db";
const app = express();

app.use(cors({
    credentials: true,
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(cookieParser())
app.use(express.json());

// Routes
app.use("/api/v1/products", authenticateToken, productsRouter);
app.use("/api/v1/auth", authRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server http://localhost:${process.env.PORT}`);
})