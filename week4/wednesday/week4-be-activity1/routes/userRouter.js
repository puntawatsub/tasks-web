const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userControllers");

// GET /users
router.get("/", UserController.getAllUsers);

// POST /users
router.post("/", UserController.createUser);

// GET /users/:userId
router.get("/:userId", UserController.getUserById);

// PUT /users/:userId
router.put("/:userId", UserController.updateUserById);

// DELETE /users/:userId
router.delete("/:userId", UserController.deleteUserById);

module.exports = router;
