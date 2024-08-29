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
const app = express();
const PORT = 3000;

// router for HW1
const hw1Router = express.Router();

hw1Router.get('/:dir/:ext', (req, res) => {
    const { dir, ext } = req.params;
    const directoryPath = path.join(__dirname, dir);
    const extension = '.' + ext;

    // directory does not exist
    if (!fs.existsSync(directoryPath)) {
        res.status(400).send('Directory does not exist!');
        return;
    }

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }

        const filesSelected = files.filter(file => path.extname(file) === extension);
        if (filesSelected.length === 0) {
            res.status(404).send('No files found!');
        } else {
            res.status(200).send(filesSelected.join('\n'));
        }
    });
});

// router for HW2
const hw2Router = express.Router();

hw2Router.get('/parsetime', (req, res) => {
    const isoTime = req.query.iso;
    if (!isoTime) {
        res.status(400).json({ error: 'ISO time is required' });
        return;
    }

    const date = new Date(isoTime);
    // validate date format
    // i.e. http://localhost:3000/api/parsetime?iso=2023-05-22T12:34:76.789Z
    if (isNaN(date.getTime())) {
        res.status(400).json({ error: 'Invalid ISO time format' });
        return;
    }
    const timeObj = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
    res.json(timeObj);
});

hw2Router.get('/unixtime', (req, res) => {
    const isoTime = req.query.iso;
    if (!isoTime) {
        res.status(400).json({ error: 'ISO time is required' });
        return;
    }
    const date = new Date(isoTime);
    const timeObject = {
        unixtime: date.getTime()
    };
    res.json(timeObject);
});

app.use('/hw1', hw1Router);
app.use('/hw2', hw2Router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  