const fs = require("fs");

// synchronous approach :
const read = fs.readFileSync("../src/assets/read.txt", "utf8");

fs.writeFileSync("../src/assets/write.txt", read);

console.log(read);

//asynchronous approach
fs.readFile("../src/assets/read.txt", "utf8", (err, data) => {
  console.log(data);
  fs.writeFileSync("../src/assets/write.txt", data);
});
