/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const app = express();
const port = 3000;

const hw3Router = require('./router/router4');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/hw3', hw3Router);

app.listen(port, () => {
  console.log('hw3 app listening on port 3000!');
});
