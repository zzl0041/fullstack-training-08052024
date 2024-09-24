const express = require("express");

const {
  createTodo,
  getAllTodos,
  getOneTodoById,
  updateOneTodoById,
  deleteOneTodoById,
} = require("../controllers/todoController");

const router = express.Router();

// /api/todos
router.get("/", getAllTodos);

router.get("/:id", getOneTodoById);

router.post("/", createTodo);

router.put("/:id", updateOneTodoById);

router.delete("/:id", deleteOneTodoById);

module.exports = router;
