/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('this is the home page');
});

app.get('/about', (req, res) => {
  res.send('this is the about page');
});

app.get('/home.html', (req, res) => {
  const que = req.query;

  fs.readFile(path.join(__dirname, 'home.html'), (err, html) => {
    if (err) {
      res.status(500).send('Reading file failed');
    } else {
      let modifiedHtml = html.toString();

      const queStr = JSON.stringify(que);
      if (Object.keys(que).length !== 0) {
        modifiedHtml += `<p>submit: ${queStr}</p>`;
      }
      res.send(modifiedHtml);
    }
  });
});

app.use(express.urlencoded({ extended: true }));

app.post('/create-post', (req, res) => {
  const queStr = new URLSearchParams(req.body).toString();
  res.redirect(`/home.html?${queStr}`);
});

app.use((req, res) => {
  res.status(404).send('This is the 404 page.');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});