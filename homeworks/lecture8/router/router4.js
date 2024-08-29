/**
 * For sample code web-server.js, make the following changes:
 * Once submitting in home.html, stay on the same page and display the submitted data.
 *
 * Hint:
 * 1. put the data of the submitted form in the query string of the url
 * 2. before res.end() in POST method, redirect to the home.html page with the query string
 *  - i.e. res.statusCode = 302; res.setHeader('Location', '/home.html?name=John&age=20');
 * 3. you need to figure out how to parse the query string in the home.html page
 * 4. after writing the html content, you need to write the query string in the html as well
 */

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  res.send('this is the home page');
});

router.get('/about', (req, res) => {
  res.send('this is the about page');
});

router.get('/home.html', (req, res) => {
  console.log(__dirname);
  fs.readFile(path.join(__dirname, 'home.html'), 'utf8', (err, html) => {
    if (err) {
      res.send(`Can't read home.html file`);
    } else {
      res.set({
        'Content-Type': 'text/html',
      });
      const title = req.query.title;
      const content = req.query.content;

      let modifiedHtml;

      if (title && content) {
        modifiedHtml = html
          .replace('{{title}}', title)
          .replace('{{content}}', content);
      } else {
        modifiedHtml = html
          .replace('<p>Title: {{title}}</p>', '')
          .replace('<p>Content: {{content}}</p>', '');
      }

      res.send(modifiedHtml);
    }
  });
});

router.post('/create-post', (req, res) => {
  const { title, content } = req.body;
  res.redirect(`/hw3/home.html?title=${title}&content=${content}`);
});

module.exports = router;
