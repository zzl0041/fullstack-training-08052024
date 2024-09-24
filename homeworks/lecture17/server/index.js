const cors = require('cors');
const express = require('express');
const connectDB = require('./db');
const todoRouter = require('./routers/todoRouter');

const app = express();
const port = 3000;

connectDB();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: 'http://localhost:5173' }));
// app.set('view engine', 'pug');
// app.set('views', './views');

app.use('/api/todos', todoRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
