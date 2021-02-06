const mongoose = require("mongoose");

// Creating Schema

const todoListSchema = new mongoose.Schema({
  itemName: String,
  date: Date,
});

//Creating Model

const TodoListModel = mongoose.model("todo_list", todoListSchema);

module.exports = TodoListModel;
