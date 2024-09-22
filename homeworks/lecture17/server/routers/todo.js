const express = require('express');
const router = express.Router();

const {
  createTodo,
  getTodoList,
  updateTodo,
  deleteTodo,
} = require('../controllers/todo');


router.post('/todos', createTodo);
router.get('/todos', getTodoList);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

module.exports = router;
