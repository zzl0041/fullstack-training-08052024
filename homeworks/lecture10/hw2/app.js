const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todo');
const path = require('path');

dotenv.config();

const fs = require('fs');
const envPath = path.resolve(__dirname, '.env');
const envConfig = fs.readFileSync(envPath, 'utf8');

const lines = envConfig.split('\n');
const filteredLines = lines.filter(line => line.trim() !== '');

const MONGO_URI = filteredLines[1].split('=')[1];


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const todos = [
      { todo: 'Learn Pug', done: false, id: 1 },
      { todo: 'Build Todo App', done: true, id: 2 },
    ];
    res.render('index', { todos });
  });

  
mongoose.connect(MONGO_URI)
    .then(()=>console.log('Connected to MongoDB'))
    .catch(err=>console.log(err));

app.use('/api', todoRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, ()=>{
    console.log('running on ${PORT}');
});