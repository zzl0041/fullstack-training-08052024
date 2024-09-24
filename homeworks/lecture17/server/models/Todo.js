const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todoItem: {
    type: String,
    require: true,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
