module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne,
};
const todos = [{
    text: 'Feed Dogs',
    done: true
  },
  {
    text: 'Learn Express',
    done: false
  },
  {
    text: 'Buy Milk',
    done: false
  }
];

function getAll(id) {
  return todos;
}
// Here's our latest function for this module
function getOne(id) {
  return todos[id];
}

function create(todo) {
  todos.push(todo);
}

function deleteOne(id) {
  todos.splice(id, 1);
}

function updateOne(id, updatedTodo) {
  todos.splice(id, 1, updatedTodo);
}
