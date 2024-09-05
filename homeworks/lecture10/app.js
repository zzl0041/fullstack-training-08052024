const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const todosRoutes = require('./routes/todos')

const app = express()

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'pug')

// Routes
app.use('/', todosRoutes)

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
