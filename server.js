import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import itemsRouter from "./routes/items.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/groceryDB";
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ Mongo Error:", err));
app.use("/api/items", itemsRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
