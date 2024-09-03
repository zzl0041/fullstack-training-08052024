const Todo = require('../models/Todo');

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).render('index', { todos: todos });
  } catch (err) {
    console.log('Error getting Todo:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const addTodo = async (req, res) => {
  try {
    const newTodo = new Todo({ todo: req.body.todo });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    console.log('Error adding Todo:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params?.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.log('Error updating Todo:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
  
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params?.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(204).json({ message: 'Todo deleted' });
  } catch (err) {
    console.log('Error deleting Todo:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};


module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
};
