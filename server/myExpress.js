const express = require("express");
const path = require("path");
const app = express();
console.log(__dirname);
app.get("/", (req, res) => {
  res.send("this is home page");
});

app.get("/contact", (req, res) => {
  res.send("this is contact page");
});

app.get("/profile/:id", (req, res) => {
  res.send(`you requested profile id : ${req.params.id}`);
});

app.get("/about", (req, res) => {
  //res.sendFile("aboutPage.html", { root: `${__dirname}../src/assets` });
  console.log(req.query);
  const filePath = path.join(__dirname, "../src/assets/aboutPage.html");
  res.sendFile(filePath);
});

app.listen(8000);
