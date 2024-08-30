const express = require('express');
const connectDB = require('./db');
const app = express();
const port = 3000;

const itemRouter = require('./router/item');

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', itemRouter);

app.listen(port, () => {
  console.log(`HW1 app is listening at http://localhost:${port}`);
});
