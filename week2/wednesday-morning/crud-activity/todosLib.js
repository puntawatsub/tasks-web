// {
//     "task": "Buy groceries",
//     "completed": false,
//     "dueDate": "2025-08-30"
// }

let todoList = [];
let nextId = 1;

const addOne = (task, completed, dueDate) => {
  if (!task || completed === undefined || !dueDate) {
    return false;
  }

  const temp = {
    id: nextId,
    task,
    completed,
    dueDate,
  };
  todoList.push(temp);
  nextId++;

  return temp;
};

const getAll = () => {
  return todoList;
};

function findById(id) {
  const numId = Number(id);
  return todoList.find((e) => e.id === id) || false;
}

function updateOneById(id, updatedData) {
  const todo = findById(id);
  if (todo) {
    if (updatedData.task) todo.task = updatedData.task;
    if (updatedData.completed) todo.completed = updatedData.completed;
    if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;
  }
  return todo;
}

function deleteOneById(id) {
  const initLength = todoList.length;
  todoList = todoList.filter((e) => e.id !== Number(id));
  return todoList.length < initLength;
}

if (require.main === module) {
  // Test code
  let result = addOne("test", false, "10-10-10");
  addOne("test1", false, "11-11-11");
  console.log("getAll:", getAll());
  console.log(result);

  console.log("findById(1):", findById(1));
  console.log("findById(3):", findById(3));

  result = updateOneById(1, { task: "edited" });
  console.log(findById(1));
  console.log(result);
  console.log(result === findById(1));

  console.log(deleteOneById(1));
  console.log(deleteOneById(3));
}

const ToDos = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = ToDos;
