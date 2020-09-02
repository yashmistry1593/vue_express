const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser());

app.post("/contact", (req, res) => {
  console.log(req.body);
  const { firstname, lastname } = req.body;
  const responseMessage = `Hi ${firstname} ${lastname} , we have received your response.`;
  res.end(JSON.stringify({ ...req.body, responseMessage }));
});

app.listen(8000, function() {
  console.log("Your first node js form submission");
});
