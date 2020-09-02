var express = require("express");
var app = express();

var myLogger = function(req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(myLogger);

app.get("/", function(req, res) {
  console.log("hi");
  res.send("Hello World!");
});

app.listen(8000);
