/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/home.html', (req, res) => {
  res.render('home', { query: req.query });
});

// Handle form submission
app.post('/create-post', (req, res) => {
  const { name, age } = req.body;
  res.redirect(`/home.html?name=${name}&age=${age}`);
});

app.use((req, res) => {
  res.status(404).send('this is the 404 page');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});