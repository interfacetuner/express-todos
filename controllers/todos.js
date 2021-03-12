// require the Todo model
const Todo = require("../models/todo");


function index(req, res) {
  res.render("todos/index", {
    todos: Todo.getAll(),
    time: req.time
  });
}

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    todoNum: parseInt(req.params.id) + 1,
  });
}

function newTodo(req, res) {
  res.render('todos/new');
}

function create(req, res) {
  // access our form data from req.body {text: "wash..."}
  console.log(req.body)
  // asign a default property to req.body
  req.body.done = false;
  // tell data file to add a new object to the (array)
  Todo.create(req.body);
  // we need to respond to the client res.redirect to send them to the index
  res.redirect("/todos");
}

function deleteTodo(req, res) {
  // ask the data file to splice out the today from the array
  Todo.deleteOne(req.params.id);
  // respond with a re-direct to index page- to see all todos minus deleted todo
  res.redirect("/todos"); //equals url
}

function edit(req, res) {
  const todo = Todo.getOne(req.params.id);
  res.render("todos/edit", {
    todo,
    todoId: req.params.id,
  });
}

function update(req, res) {
  // set the done property
  req.body.done = req.body.done ? true : false;
  // ask the data file to replace existing todo with updated one
  Todo.updateOne(req.params.id, req.body);
  // respond with res.redirect
  res.redirect(`/todos/${req.params.id}`);
}

module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteTodo,
  edit,
  update,
};
