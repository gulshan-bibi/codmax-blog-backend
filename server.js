import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
  .then(()=> console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes); // <-- YE LINE ADD KARNA ZAROORI HAI

app.get("/", (req,res)=> res.sendFile("index.html", {root: "public"}));

const PORT = 5000;
app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`));