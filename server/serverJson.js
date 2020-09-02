const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request was made:" + req.url);
  res.writeHead(200, { "Content-Type": "application/json" });

  let obj = {
    fname: "yash",
    lname: "mistry",
    gender: "male",
    mobile: "9870050550",
  };
  res.end(JSON.stringify(obj));
});

server.listen(8000, "127.0.0.1");
console.log("hey there...!! now listening to port 8000");
