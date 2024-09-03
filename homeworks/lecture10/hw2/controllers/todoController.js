const Todo = require("../models/Todo");

const createTodo = async (req, res) => {
  //   res.send("create a todo");
  try {
    if (req.body) {
      const todo = new Todo(req.body);
      await todo.save();
      res.status(201).json(todo);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllTodos = async (req, res) => {
  //   res.send("get all todos");
  try {
    const todos = await Todo.find();
    // res.status(200).json(todos);
    res.render("index", { todos });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const getOneTodoById = async (req, res) => {
  //   res.send("get one todo by id");
  try {
    const todo = await Todo.findById(req.params?.id);
    res.status(200).json(todo);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateOneTodoById = async (req, res) => {
  //   res.send("update a todo by id");
  try {
    const todo = await Todo.findByIdAndUpdate(req.params?.id, req.body, {
      new: true,
    });
    res.status(200).json(todo);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteOneTodoById = async (req, res) => {
  //   res.send("delete a todo by id");
  try {
    await Todo.findByIdAndDelete(req.params?.id);
    res.status(204).json({ message: "todo item deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  getOneTodoById,
  updateOneTodoById,
  deleteOneTodoById,
};
