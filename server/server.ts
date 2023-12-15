import 'dotenv/config'
import express from "express";
import cors from "cors";
import productsRouter from "./routes/productsRouter";
import connectDB from './db'

const PORT = 8080;
const app = express();

connectDB()

app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000"]
}));

app.use(express.json());

// Routes
app.use("/api/v1/products", productsRouter)

app.listen(PORT, () => {
    console.log("Server http://localhost:" + PORT);
})