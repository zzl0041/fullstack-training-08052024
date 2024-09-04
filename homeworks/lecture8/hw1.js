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
const { error } = require('console');
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;

const router1 = express.Router();
router1.get('/:dir/:ext', (req,res) =>{
    const {dir, ext} = req.params;
    const directoryPath = path.join(__dirname, dir);
    const extension = '.' + ext;

    if(!fs.existsSync(directoryPath)){
        res.status(400).send('no such dir');
        return;
    }
    fs.readdir(directoryPath, (err, files)=>{
        if(err){
            res.status(500).send(err.message);
            return;
        }
        const filesSelected = files.filter(file=> path.extname(file)===extension);
        if(filesSelected.length===0)
            res.status(404).send('no such files');
        else
            res.status(200).send(filesSelected.join('\n'));
    });
});

const router2 = express.Router();
router2.get('/parsetime', (req, res)=>{
    const isoTime = req.query.iso;
    if(!isoTime){
        res.status(400).json({error: 'no ISO time'});
        return;
    }
    const date = new Date(isoTime);
    if(isNaN(date.getTime())){
        res.status(400).json({error: 'invalid ISO time'});
        return;
    }
    const timeObj = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
    res.json(timeObj);
});
router2.get('/unixtime', (req, res)=>{
    const isoTime = req.query.iso;
    if(!isoTime){
        res.status(400).json({error: 'no ISO time'});
        return;
    }
    const date = new Date(isoTime);
    const timeObj = {
        unixtime: date.getTime()
    };
    res.json(timeObj);
})
app.use('/hw1', router1);
app.use('/hw2', router2);
app.listen(PORT, ()=>{
    console.log('running under ${PORT}');
});

// http://127.0.0.1:3001/hw1/test/js
// test.js

// http://127.0.0.1:3001/hw2/parsetime?iso=2023-05-22T12:34:56.789Z
// {
//     "hour": 8,
//     "minute": 34,
//     "second": 56
// }
// {
//     "unixtime": 1684758896789
// }