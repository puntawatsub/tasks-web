const User = require("../models/userModel");

// GET /users
const getAllUsers = (req, res) => {
  res.json(User.getAll());
};

// POST /users
const createUser = (req, res) => {
  const response = User.addOne(req.body);
  if (response) {
    res.json(response);
  } else {
    res.status(500).json({ message: "Failed to create user" });
  }
};

// GET /users/:userId
const getUserById = (req, res) => {
  const response = User.findById(req.params.userId);
  if (response) {
    res.json(response);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// PUT /users/:userId
const updateUser = (req, res) => {
  const response = User.updateOneById(req.params.userId, { ...req.body });
  if (response) {
    res.json(response);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  const response = User.deleteOneById(req.params.userId);
  if (response) {
    res.status(201).json({ message: "Delete user successful" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
