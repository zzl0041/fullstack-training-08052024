/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Set up view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.end("this is the home page");
});

app.get("/about", (req, res) => {
  res.end("this is the about page");
});

app.get("/home.html", (req, res) => {
  const { title, content } = req.query;
  res.render("home", { title, content });
});

app.post("/create-post", (req, res) => {
  const { title, content } = req.body;
  const encodedTitle = encodeURIComponent(title);
  const encodedContent = encodeURIComponent(content);
  res
    .status(302)
    .redirect(`/home.html?title=${encodedTitle}&content=${encodedContent}`);
});

app.use((req, res) => {
  res.status(404).send("this is the 404 page");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

// http://localhost:3000/home.html
