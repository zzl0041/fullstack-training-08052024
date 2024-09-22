const Todo = require('../models/Todo');

const createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    // response
    res.status(201).json({ message: 'Todo created' });
  } 
  catch (err) {
    console.log(err.message);
    if (err.name === 'ValidationError') res.status(400).json({ message: 'invalid Todo' });
    else res.status(500).json({ message: 'Server Error' });
  }
};

const getTodoList = async (req, res) => {
  try {
    const todos = await Todo.find();
    // res.render('index', { todos: todos });
    res.status(200).json( todos );
  } 
  catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params?.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    todo.done = req.body.done;
    await todo.save();
    res.status(200).json({ message: 'Update todo success' });
  } catch (err) {
    console.log(err.message);
    if (err.name === 'CastError') res.status(400).json({ message: 'invalid Todo ID' });
    else res.status(500).json({ message: 'Server Error' });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params?.id);
    if (!deletedTodo) return res.status(404).json({ message: 'Todo not found' });
    res.status(200).json({ message: 'Todo deleted' });
  } catch (err) {
    console.log(err.message);
    if (err.name === 'CastError') res.status(400).json({ message: 'invalid Todo ID' });
    else res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createTodo,
  getTodoList,
  updateTodo,
  deleteTodo,
};
