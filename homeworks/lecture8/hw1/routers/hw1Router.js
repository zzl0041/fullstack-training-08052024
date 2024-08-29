const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/", (req, res) => {
  console.log(`cur directory: ${__dirname}`);
  res.send("hw1 router");
});

router.get("/:dir/:extension", (req, res) => {
  const { dir, extension } = req.params;
  //   console.log(`dir: ${dir}, extension: ${extension}`);
  console.log(`cur directory: ${__dirname}`);

  if (dir && extension) {
    let dirPath = path.join(__dirname, `../${dir}`),
      fileExt = "." + extension;

    console.log(`dirPath: ${dirPath}, fileExt: ${fileExt}`);
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        // console.log(err);
        res.status(500).send("Invalid directory or no such file");
      } else {
        const filterFiles = files.filter(
          (file) => path.extname(file) === fileExt
        );
        if (filterFiles.length > 0) {
          // console.log(filterFiles);
          console.log("found following files");
          filterFiles.forEach((file) => {
            console.log(file);
          });
          res.json({ foundFiles: filterFiles });
        } else {
          res.send("No such files found in the directory");
        }
      }
    });
  } else {
    res.send("Missing directory or extension");
  }
});

module.exports = router;
