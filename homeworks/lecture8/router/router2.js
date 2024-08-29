const express = require('express');
const router = express.Router();
const url = require('url');

router.get('/parsetime', (req, res) => {
  const date = new Date(req.query.iso);
  const parseDate = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };

  res.json(parseDate);
});

router.get('/unixtime', (req, res) => {
  const date = new Date(req.query.iso);
  const unixtime = { unixtime: date.getTime() };

  res.json(unixtime);
});

module.exports = router;

//http://localhost:3000/api/unixtime?iso=2023-05-22T12:34:56.789Z
//http://localhost:3000/api/parsetime?iso=2023-05-22T12:34:56.789Z
