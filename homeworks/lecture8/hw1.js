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

const exp = require("constants");
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

// Router for hw1
const hw1Router = express.Router();
hw1Router.get("/:dir/:ext", (req, res) => {
  const directory = path.join(__dirname, req.params.dir);
  const extension = `.${req.params.ext}`;

  fs.readdir(directory, (err, files) => {
    if (err) {
      return res.status(500).send(`Error reading directory: ${err.message}`);
    }

    const filteredFiles = files.filter(
      (file) => path.extname(file) === extension
    );
    res.json(filteredFiles);
  });
});

// router for hw2
function handleParseTime(isoDate) {
  const date = new Date(isoDate);
  return {
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds(),
  };
}

function handleUnixTime(isoDate) {
  const date = new Date(isoDate);
  return {
    unixtime: date.getTime(),
  };
}

const hw2Router = express.Router();
hw2Router.get("/parsetime", (req, res) => {
  const isoDate = req.query.iso;
  if (!isoDate) {
    return res.status(400).json({ error: "Missing iso query parameter" });
  }
  const result = handleParseTime(isoDate);
  res.json(result);
});

hw2Router.get("/unixtime", (req, res) => {
  const isoDate = req.query.iso;
  if (!isoDate) {
    return res.status(400).json({ error: "Missing iso query parameter" });
  }
  const result = handleUnixTime(isoDate);
  res.json(result);
});

app.use("/hw1", hw1Router);
app.use("/hw2", hw2Router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
