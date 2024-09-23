const express = require("express");
const { getAllTodos, createTodo, toggleTodo, deleteTodo } = require("../controllers/todo");

const router = express.Router();

router.get("/todos", getAllTodos);
router.post("/todos", createTodo);
router.put("/todos/:id", toggleTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;
