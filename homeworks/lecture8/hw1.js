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
const path = require('path');
const fs = require('fs');
const process = require('process');
const app = express();
const port = 5500;

// app.use(express.static(__dirname));

app.get('/hw1/:dir/:ext', (req, res, next) => {
    const print_files = (dirname, ext) => {
        try {
            let files = fs.readdirSync(dirname);
            // consider . not included in ext
            let ext_files = files.filter(file => path.extname(file).slice(1) == ext);
            return ext_files;
        }
        catch (err) {
            console.log(err.message);
            return err.message;
        }
    }
    res.send(`searched files: ${print_files(req.params.dir, req.params.ext)}`);
});

app.get('/hw2/api/parsetime', (req, res, next) => {
    let input_time = new Date(req.query.iso);
    res.json({
        hour: input_time.getHours(),
        minute: input_time.getMinutes(),
        second: input_time.getSeconds(),
    });
});

app.get('/hw2/api/unixtime', (req, res, next) => {
    let input_time = new Date(req.query.iso);
    res.json({unixtime: input_time.getTime()});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
