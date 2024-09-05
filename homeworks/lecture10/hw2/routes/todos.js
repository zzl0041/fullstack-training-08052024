const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.render("index", { todos });
});

// Add a new todo
router.post("/add", async (req, res) => {
  const { title } = req.body;
  const newTodo = new Todo({
    title,
  });
  await newTodo.save();
  res.redirect("/todos");
});

// Delete a todo
router.post("/delete/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.redirect("/todos");
});

// Update completion status
router.post("/complete/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.completed = !todo.completed;
  await todo.save();
  res.redirect("/todos");
});

module.exports = router;
