// what is the output in order? and explain why?

// 1
console.log("a");
setTimeout(() => console.log("b"), 0);
console.log("c");
new Promise((resolve, reject) => {
  resolve("d");
  console.log("e");
  reject("f");
}).then((result) => console.log(result));

// a
// c
// e
// d
// b
// console.log("a") excuted first.
// "setTimeout" is called next, but the function inside is pushed into macrotask queue and will run later.
// "console.log("c") excuted.
// A promise is created.The resolve('d') is executed, but it doesn't affect anything yet.
// console.log('e') excuted.
// The Promise is resolved immediately with 'd', and since .then() is called on this Promise, the callback is pushed to the microtask queue.
// The reject('f') doesn't have an effect because the Promise was already resolved.

2;
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

fn().then((res) => {
  console.log(res);
});

console.log("start");

// 1
// start
// success

// When "fn" is called, "Promise" is been crearted.
// Inside the promise, "console.log(1)" is been excuted immediately.
// "then()" callback is exceted and print "start", and finally the event loop will proccess resolve part, print "success".
