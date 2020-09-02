const fs = require("fs");

const myReadStream = fs.createReadStream("../src/assets/lorem.txt", "utf8");
const myWriteStream = fs.createWriteStream(
  "../src/assets/loremWrite.txt",
  "utf8"
);

// using event approach
// myReadStream.on("data", (chunk) => {
//   console.log("new chunk received : ++++++++++++++++++++++++++++++++++++++++");
//   myWriteStream.write(chunk);
// });

// using pipe approach

myReadStream.pipe(myWriteStream);
