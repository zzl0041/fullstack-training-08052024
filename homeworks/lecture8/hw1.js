/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */

const express = require('express');
const fs = require('fs');
const path = require('path');
// const router = express.Router();
const app = express();
const PORT = 3000;

// Route for hw1, handling requests like /hw1/:dir/:ext
const hw1Router = express.Router();
hw1Router.get('/:dir/:ext', (req, res) => {
  const dirName = path.join(__dirname, '../', req.params.dir);
  const extFilter = '.' + req.params.ext;

  fs.readdir(dirName, (err, files) => {
    if (err) {
      return res.status(500).send({ error: 'Error reading directory: ' + err.message });
    }

    // Filter files by extension and send them as a response
    const filteredFiles = files.filter(file => path.extname(file) === extFilter);

    res.json({ files: filteredFiles });
  });
});

// Route for /api/parsetime
const hw2Router = express.Router();
hw2Router.get('/parsetime', (req, res) => {
  const isoTime = req.query.iso;

  if (!isoTime) {
    return res.status(400).json({ error: 'ISO time is required' });
  }

  const date = new Date(isoTime);
  const timeObj = {
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds()
  };

  res.json(timeObj);
});

// Route for /api/unixtime
hw2Router.get('/unixtime', (req, res) => {
  const isoTime = req.query.iso;

  if (!isoTime) {
    return res.status(400).json({ error: 'ISO time is required' });
  }

  const date = new Date(isoTime);
  const unixTimeObj = {
    unixtime: date.getTime()
  };

  res.json(unixTimeObj);
});


app.use('/hw1', hw1Router);
app.use('/hw2', hw2Router);

app.use((req, res) => {
  res.status(404).send('This is the 404 page');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
