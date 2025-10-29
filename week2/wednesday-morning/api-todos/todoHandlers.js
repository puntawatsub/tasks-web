const ToDo = require("./todoLib");

const getAllTodos = (req, res) => {
  const allTodo = ToDo.getAll();
  res.json(allTodo);
};

const createTodo = (req, res) => {
  const { task, completed, dueDate } = req.body;

  const todo = ToDo.addOne(task, completed, dueDate);

  if (todo) {
    res.json(todo);
  } else {
    res.status(500).json({ message: "Cannot create todo" });
  }
};

const getTodoById = (req, res) => {
  const id = req.params.id;
  const todo = ToDo.findById(id);

  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: `Todo with id ${id} not found` });
  }
};

const updateTodo = (req, res) => {
  const { task, completed, dueDate } = req.body;
  const id = req.params.id;

  const todo = ToDo.updateOneById(id, { task, completed, dueDate });
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Cannot update todo with id" });
  }
};

const deleteTodo = (req, res) => {
  const id = req.params.id;

  const todo = ToDo.deleteOneById(id);

  if (todo) {
    res.json({ message: "Delete success" });
  } else {
    res.status(404).json({ message: `Todo with id ${id} not found` });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
};
