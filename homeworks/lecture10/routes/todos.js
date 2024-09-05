const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

// Get all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find()
  res.render('index', { todos })
})

// Create new todo
router.post('/add', async (req, res) => {
  const { title, description } = req.body
  const newTodo = new Todo({
    title,
    description,
  })
  await newTodo.save()
  res.redirect('/')
})

// Mark todo as completed
router.post('/:id/complete', async (req, res) => {
  const todo = await Todo.findById(req.params.id)
  todo.completed = true
  await todo.save()
  res.redirect('/')
})

// Delete a todo
router.post('/:id/delete', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id)
  res.redirect('/')
})

module.exports = router
