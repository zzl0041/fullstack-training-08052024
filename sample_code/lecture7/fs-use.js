// const { log } = require('console');
const fs = require("fs");
const path = require("path");

const fileName = path.join(__dirname, "demo.txt");
// log('start');
console.log("start");
// async
fs.writeFile(fileName, "Hello World", (err) => {
  if (err) {
    throw err;
  } else {
    // log('The file has been saved!');
    console.log("The file has been saved!");
  }
});
// log('after write');
console.log("after write");

fs.readFile(fileName, { encoding: "utf8" }, (err, data) => {
  if (err) {
    throw err;
  } else {
    // log(data);
    console.log(data);
  }
});

// sync version
// try {
//   fs.writeFileSync(fileName, "Hello World");

//   let result = fs.readFileSync(fileName, { encoding: "utf8" });
//   console.log("read file sync", result);
//   console.log("end");
// } catch (err) {
//   console.log(err.message);
// }
