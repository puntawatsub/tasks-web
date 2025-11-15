const express = require("express");
const router = express.Router();
const BlogController = require("../controllers/blogControllers");

// GET /blogs
router.get("/", BlogController.getAllBlogs);

// POST /blogs
router.post("/", BlogController.createBlog);

// GET /blogs/:blogId
router.get("/:blogId", BlogController.getBlogById);

// PATCH /blogs/:blogId
router.patch("/:blogId", BlogController.updateBlogById);

// DELETE /blogs/:blogId
router.delete("/:blogId", BlogController.deleteBlogById);

// PUT /blogs/:blogId
router.put("/:blogId", BlogController.replaceBlogById);

module.exports = router;
