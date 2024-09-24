require('dotenv').config();

const express = require('express');

const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const List = require('./models/List')
const listRouter = require('./routers/listRouter');

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err.message);
});

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

const todos = [
  { id: 1, todo: 'first thing', done: true },
  { id: 2, todo: 'second thing', done: false },
  { id: 3, todo: 'third thing', done: false }
];

// app.get('/', (req, res) => {
//   res.render('index', { todos });
// });
app.get('/', async (req, res) => {
  try {
    const todos = await List.find();
    res.render('index', { todos });
  } catch (err) {
    res.status(500).render('error', { error: err });
  }
});

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

app.use('/api/todos', listRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});