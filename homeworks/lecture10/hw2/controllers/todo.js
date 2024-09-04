const Todo = require("../models/Todo");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const toggleTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params?.id);
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params?.id);
    res.status(200).json({ message: "Todo deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  toggleTodo,
  deleteTodo,
};
