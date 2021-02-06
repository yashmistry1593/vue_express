const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("dotenv/config");

app.use(bodyParser());
app.use(cors());

// Connect to database

mongoose.connect(
  process.env.DB_CONNECTION_URI,
  {
    useNewUrlParser: true,
  },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Connected to the database");
    }
  }
);

// Creating Schema

const todoListSchema = new mongoose.Schema({
  itemName: String,
  date: Date,
});

//Creating Model

const TodoListModel = mongoose.model("todo_list", todoListSchema);

// add document to the database
app.post("/todo/add", (req, res) => {
  console.log(req.body);

  TodoListModel.create(
    {
      itemName: req.body.itemName,
      date: new Date(),
    },
    function(error, data) {
      if (error) {
        console.log("There was a problem adding the data");
        console.log(error);
        res.end(JSON.stringify({ todoList: [] }));
      } else {
        console.log("Data added to the collection");
        console.log(data);
        res.end(JSON.stringify({ todoList: [data] }));
      }
    }
  );
  // res.redirect("/findAll");
});

app.get("/todo/remove/:id", (req, res) => {
  console.log("rer :", req);
  const id = req.params.id;
  console.log(id);

  TodoListModel.findByIdAndDelete(id, function(error, data) {
    if (error) {
      console.log("There was a problem deleting the data");
      console.log(error);
    } else {
      console.log("Data has been deleted from database");
      console.log(data);
      res.end(JSON.stringify({ todoList: [data] }));
    }
  });
});

// fetch all documents
app.get("/todo/findAll", (req, res) => {
  TodoListModel.find({}, function(error, data) {
    if (error) {
      console.log("There was a problem adding the data");
      console.log(error);
    } else {
      console.log("Data retrived from database");
      console.log(data);

      res.end(JSON.stringify({ todoList: data }));
    }
  });
});

// fetch document by id
app.get("/todo/find/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  TodoListModel.findById(id, function(error, data) {
    if (error) {
      console.log("Could not found the data");
      console.log(error);
      res.sendStatus(404);
    } else {
      console.log("Data retrived from database");
      console.log(data);
      // set status
      res.status(200);
      // set cookie
      res.cookie("username", "Flavio");
      //res.end(JSON.stringify({ todoList: data }));
      //or
      res.json({ todoList: data });
    }
  });
});

app.listen(8000, function() {
  console.log("Your first node js form submission");
});
