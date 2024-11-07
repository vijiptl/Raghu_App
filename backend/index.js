import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connect.js";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";
import path from "path";

const app = express();
const PORT = 5000;
const __dirname = path.resolve();
dotenv.config();

app.use(
  cors({
    // origin: "http://127.0.0.1:5173", // Allow this origin
    origin: "http://127.0.0.1:5000", // Allow this origin
    credentials: true, // Allow credentials (cookies, etc.)
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, async () => {
  await connectDB();
  console.log("server is running at port", PORT);
});
