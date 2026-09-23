const Blog = require('../models/Blog');

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch(e){ res.status(500).json({message:e.message}) }
};

exports.getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if(!blog) return res.status(404).json({message: "Not found"});
    res.json(blog);
  } catch(e){ res.status(500).json({message:e.message}) }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  } catch(e){ res.status(500).json({message:e.message}) }
};