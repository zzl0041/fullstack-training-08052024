const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.get("/:dir/:ext", (req, res) => {
  const directory = path.join(__dirname, "/..", req.params.dir);
  const extension = "." + req.params.ext;
  fs.readdir(directory, (err, files) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Error occurs when scanning current directory" });
    }
    const filteredFiles = files.filter(
      (file) => path.extname(file) === extension
    );
    res.status(200).json(filteredFiles);
  });
});

module.exports = router;
