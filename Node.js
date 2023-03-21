// const Express = require("./Express");

// console.log("hello");

// setTimeout(() => {
//   console.log("5 sec");
// }, 5000);

// setTimeout(() => {
//   console.log(" 0 sec");
// });

// console.log("moraj");

// console.error(Express);

const arr = [1, 3, 6, 4, 7, 8, 5, 5];

let x = arr.filter((a) => {
  return a === 1;
});
console.log(x);

const fs = require("fs");

console.log("->>", __dirname);

fs.writeFileSync("hello", "code somethings");
