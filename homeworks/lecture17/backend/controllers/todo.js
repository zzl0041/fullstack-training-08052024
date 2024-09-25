const Todo = require('../models/Todo');

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
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
    console.log('Error adding Todo:', error.message);
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

const markAllDone = async (req, res) => {
  try {
    const undoneTodos = await Todo.find({ done: false });
    const updateValue = undoneTodos.length > 0 ? true : false;

    const result = await Todo.updateMany({}, { done: updateValue });
    // console.log('Update result:', result);
    res.status(200).json({ message: updateValue ? 'All todos marked as done' : 'All todos marked as not done' });
  } catch (err) {
    console.error('Error marking all todos:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};


const clearCompletedTodos = async (req, res) => {
  try {
    await Todo.deleteMany({ done: true });
    res.status(200).json({ message: 'Completed todos cleared' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  markAllDone,
  clearCompletedTodos,
};
