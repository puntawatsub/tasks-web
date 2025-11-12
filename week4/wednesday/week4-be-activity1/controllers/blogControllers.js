const Blog = require("../models/blogModel");

// GET /blogs
const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });
  res.json(blogs);
};

// POST /blogs
const createBlog = async (req, res) => {
  const blog = await Blog.create({ ...req.body });
  res.status(201).json(blog);
};

// GET /blogs/:blogId
const getBlogById = async (req, res) => {
  const { blogId } = req.params;
  const blog = await Blog.findById(blogId);

  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: "Blog not found" });
  }
};

// PUT /blogs/:blogId
const updateBlogById = async (req, res) => {
  const { blogId } = req.params;
  const blog = await Blog.findByIdAndUpdate(
    { _id: blogId },
    { ...req.body },
    { new: true }
  );

  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: "Blog not found" });
  }
};

// DELETE /blogs/:blogId
const deleteBlogById = async (req, res) => {
  const { blogId } = req.params;
  const blog = await Blog.findOneAndDelete({ _id: blogId });
  if (blog) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Blog not found" });
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlogById,
  deleteBlogById,
};
