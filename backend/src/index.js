import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import { initializeSocket } from "./lib/socket.js";
import cors from "cors";

import {connectDB}from "./lib/db.js"

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"
dotenv.config()

const app = express();

const PORT = process.env.PORT || 5003;

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: "https://chat-app-frontend-7crf.onrender.com",
    credentials: true,
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
const server = initializeSocket(app);
server.listen(PORT, () => {
    console.log("Server is running on PORT:" +PORT);
    connectDB();
});
