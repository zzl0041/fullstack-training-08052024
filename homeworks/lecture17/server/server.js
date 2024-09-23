const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
// app.use('/api/todos', todoRoutes);

// Mock data for todos
let todos = [
    { id: 1, text: 'Learn Redux', completed: false },
    { id: 2, text: 'Build a Todo App', completed: true }
  ];
  
  // GET request to return all todos
  app.get('/api/todos', (req, res) => {
    res.json(todos); // Respond with the list of todos as JSON
  });

// Connect to MongoDB
mongoose.connect('mongodb+srv://root:Hzpeng527@terencelincluster0.ppmro.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
