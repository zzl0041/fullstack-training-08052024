const express = require('express');
const todoRouter = require('./routers/todos');
const connectDB = require('./db');
const Todo = require('./models/Todo');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


connectDB();

app.use('/api', todoRouter);

app.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render('index', { todos: todos.length > 0 ? todos : [] });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
