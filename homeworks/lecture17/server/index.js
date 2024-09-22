const express = require('express');
const router = require('./routers/todo');

const connectDB = require('./db');
const app = express();
const port = 5000;

connectDB();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
