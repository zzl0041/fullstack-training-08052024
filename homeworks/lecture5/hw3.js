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
// output: a c e d b
// console.log 'a', 'c' are executed first by code order since they are synchronous task
// setTimeout will be executed after promise since setTimeout is macrotask and promise is microtask
// After 'a', 'c' have been printed, promise is executed. 'e' will be printed next since, resolve('d') will be executed in the .then(). reject 'f' won change the promise outcome since a promise can only be resolved or rejected, and this promise has been resolved. So the following output is 'e', 'd', 'b'

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

fn().then((res) => {
  console.log(res);
});

console.log("start");

// output: 1 start success
// When fn is called, it returns a promise and executor of the return promise runs synchronously. So the console log '1' will be printed. The resolve 'success' will be executed in the .then(). Since it pass to .then() as a promise it will be executed after console log 'start'. Then the output is 1 start success
