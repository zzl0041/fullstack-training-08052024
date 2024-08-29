/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");
const APP = express();
const PATH = require("path");
const PORT = 3000;

const controller = require("./controller");

APP.set("view engine", "pug");
APP.set("views", PATH.join(__dirname, "views"));

APP.use(express.urlencoded({ extended: true }));
// APP.use(express.json());

APP.get("/", (req, res) => {
  res.send("HW3: homepage");
});

APP.get("/about", (req, res) => {
  res.send("HW3: about page");
});

APP.get("/home.html", (req, res) => {
  const { title: inputTitle, content: inputContent } = req.query;
  if (inputTitle && inputContent) {
    // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!");
    res.render("index", {
      displayTitle: inputTitle,
      displayContent: inputContent,
    });
  } else {
    res.render("index");
  }
});

APP.post("/create-post", controller.createPost);

APP.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
