const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/todo');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express();

app.use(cors());  // Enable CORS for all requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  }
  catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


app.post('/api/todos', async (req, res) => {
  try {
    const todo = new Todo({ todo: req.body.todo });
    await todo.save();
    res.json(todo);
  }
  catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


app.patch('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  }
  catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
