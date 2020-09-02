const fs = require("fs");

// // How to create directory synchrously:
// fs.mkdirSync("stuff");

// // How to create directory Asynchrously:
// fs.mkdir("stuff", (err) => {
//   console.log(err);
// });

// create directory , read file and write in file created in new directory
fs.mkdir("stuff", () => {
  fs.readFile("../src/assets/read.txt", "utf8", (err, data) => {
    console.log(data);
    fs.writeFile("stuff/write.txt", data, (err) => {
      console.log(err);
    });
  });
});
