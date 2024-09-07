const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/:dir/:ext', (req, res) => {
  const directory = path.join(__dirname, req.params.dir);
  let extention = req.params.ext

  if (req.params.dir.includes('/')) {
    return res.status(400).send('Cannot input nested directory.');
  }

  if (!extention.startsWith('.')) {
    extention = `.${extention}`;
  }

  fs.readdir(directory, (err, files) => {
    if (err) {
      return res.status(500).send('Directory cannot be reached.');
    }

    if (!files || files.length === 0) {
      return res.status(404).send('No files in the directory.');
    }

    const filteredFiles = files.filter((value) => {
      return path.extname(value) === extention;
    });

    if (!filteredFiles || filteredFiles.length === 0) {
      return res.status(404).send('No files with the required extention in the directory');
    }

    res.json(filteredFiles);
  });
});

module.exports = router;
