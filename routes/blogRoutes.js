const express = require('express');
const router = express.Router();
const { getAllBlogs, getSingleBlog, createBlog } = require('../controllers/blogController');

router.get("/", getAllBlogs);
router.get("/:id", getSingleBlog);
router.post("/", createBlog);

module.exports = router;