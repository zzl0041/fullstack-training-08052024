const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/todo-list-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static("public"));

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.use("/todos", require("./routes/todos"));

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
