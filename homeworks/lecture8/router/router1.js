const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

router.get('/:dir/:ext', (req, res) => {
  const dir = req.params.dir;
  const ext = '.' + req.params.ext;

  fs.readdir(dir)
    .then((files) => {
      const matched = files.filter((element) => path.extname(element) === ext);
      res.json(matched);
    })
    .catch((err) => {
      res.status(500).send(`Error reading directory: ${err.message}`);
    });
});

module.exports = router;
