const Todo = require('../models/Todo')

// @desc Get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find()
    res.status(200).json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc Add new todo
exports.createTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
    })
    const todo = await newTodo.save()
    res.status(201).json(todo)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc Update todo
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' })
    }

    todo.completed = !todo.completed
    await todo.save()
    res.status(200).json(todo)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc Delete todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id)
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' })
    }
    res.status(200).json({ message: 'Todo removed' })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}
