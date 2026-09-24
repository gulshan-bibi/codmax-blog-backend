import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  category: {type: String, default: "Technology"},
  author: {type: String, default: "Gulshan Bibi"}
}, {timestamps: true});

export default mongoose.model("Blog", blogSchema);