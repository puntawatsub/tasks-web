const User = require("../models/userModel");

const userNotFound = {
  message: "User not found",
};

// GET /users
const getAllUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.json(users);
};

// POST /users
const createUser = async (req, res) => {
  const user = await User.create({ ...req.body });
  res.json(user);
};

// GET /users/:userId
const getUserById = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json(userNotFound);
  }
};

// PUT /users/:userId
const updateUserById = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findOneAndUpdate(
    { _id: userId },
    { ...req.body },
    { new: true }
  );

  if (user) {
    res.json(user);
  } else {
    res.status(404).json(userNotFound);
  }
};

// DELETE /users/:userId
const deleteUserById = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findOneAndDelete({ _id: userId });
  if (user) {
    res.status(204).send();
  } else {
    res.status(404).json(userNotFound);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
