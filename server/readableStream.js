const fs = require("fs");

const myReadStream = fs.createReadStream("../src/assets/lorem.txt");

myReadStream.on("data", (chunk) => {
  console.log("new chunk received : ++++++++++++++++++++++++++++++++++++++++");
  console.log(chunk);
});
