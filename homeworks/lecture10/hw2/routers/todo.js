const express = require('express');
const router = express.Router();
const {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todo');

router.get('/', getTodos, (req, res) => {
    res.render('index');
});

router.get('/todos', getTodos, (req, res) => {
    res.render('index');
});

router.post('/todos', addTodo);

router.put('/todos/:id', updateTodo);

router.delete('/todos/:id', deleteTodo);

module.exports = router;
