const express = require('express');
const router = express.Router();
const {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    markAllDone,
    clearCompletedTodos
} = require('../controllers/todo');

router.get('/todos', getTodos);

router.post('/todos', addTodo);

router.put('/todos/mark-all-done', markAllDone);

router.delete('/todos/clear-completed', clearCompletedTodos);

router.put('/todos/:id', updateTodo); 

router.delete('/todos/:id', deleteTodo);

module.exports = router;
