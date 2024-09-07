// const express = require('express');

// const app = express();

// app.use(express.static('public'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.set('view engine', 'pug');
// app.set('views', './views');

// const todos = [
//   { id: 1, todo: 'first thing', done: true },
//   { id: 2, todo: 'second thing', done: false },
//   { id: 3, todo: 'third thing', done: false }
// ];

// app.get('/', (req, res) => {
//   res.render('index', { todos });
// });

// app.post('/api/todos', (req, res) => {
//   const todo = req.body.todo;
//   todos.push({ id: todos.length + 1, todo, done: false });
//   res.json(todos);
// });

// app.put('/api/todos/:id', (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   const todo = todos.find(t => t.id === id);
//   todo.done = !todo.done;
//   res.json(todo);
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/todo');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected"))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

app.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render('index', { todos });
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
    if (!todo) return res.status(404).json({ message: 'Not found' });
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  }
  catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// app.put('/api/todos/:id', async (req, res) => {
//   try {
//     const { todo, done } = req.body;
//     const updatedTodo = await Todo.findByIdAndUpdate(
//       req.params.id,
//       { todo, done },
//       { new: true, runValidators: true }
//     );
//     if (!updatedTodo) return res.status(404).send('Todo not found');
//     res.json(updatedTodo);
//   } catch (err) {
//     console.error('Error updating todo:', err);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});