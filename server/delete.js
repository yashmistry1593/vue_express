const fs = require("fs");

// // How to delete file :
// fs.unlink("../src/assets/write.txt", (err) => {
//   console.log(err);
// });

// // How to remove directory synchrously:
// fs.rmdirSync("stuff");

// //How to remove directory Asynchrously:
// fs.rmdir("stuff", (err) => {
//   console.log(err);
// });

// // You cannot remove directory directly
// fs.rmdir("stuff", (err) => {
//   console.log(err);
// });

// // how to delete directory :

fs.unlink("stuff/write.txt", () => {
  fs.rmdir("stuff", (err) => {
    console.log(err);
  });
});
