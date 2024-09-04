/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
  const { name, age } = req.query;
  res.render("home", { name, age });
});
app.post("/create-post", (req, res) => {
  const { name, age } = req.body;
  res.redirect(`/home?name=${name}&age=${age}`);
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
