const express = require("express");
const todoRouter = require("./routers/todos");
const connectDB = require("./db");
const Todo = require('./models/Todo');
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

connectDB();

app.use("/api", todoRouter);

app.get("/", async (req, res) => {
  try {
    console.log('here')
    const todos = await Todo.find();
    console.log(todos)
    res.render("index", { todos: todos.length > 0 ? todos : [] });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
