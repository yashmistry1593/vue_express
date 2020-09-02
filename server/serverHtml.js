const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request was made:" + req.url);
  res.writeHead(200, { "Content-Type": "text/html" });

  const myReadStream = fs.createReadStream("../src/assets/index.html", "utf8");
  myReadStream.pipe(res);
});

server.listen(8000, "127.0.0.1");
console.log("hey there...!! now listening to port 8000");
