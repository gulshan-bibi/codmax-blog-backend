import Blog from "../models/Blog.js";

export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create({ ...req.body, user: req.user.id });
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const { search, category } = req.query;
    let query = {};
    if (search) query.title = { $regex: search, $options: "i" };
    if (category && category != "All") query.category = category;
    const blogs = await Blog.find(query).populate('user', 'name').sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(404).json({ error: "Not Found" });
  }
};

export const updateBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(blog);
};

export const deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};