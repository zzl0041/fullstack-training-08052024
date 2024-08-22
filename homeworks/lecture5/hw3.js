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
/**
 * output:
 * a
 * c
 * e
 * d
 * b
 *
 * reason:
 * 'a' and 'c' are logged first because they are synchronous operations
 * Then 'e' because When the Promise is created, resolve('d') and console.log('e') are executed synchronously.
 * Then 'd': The promise resolves immediately with 'd', but '.then()' is placed in the microtask queue. It is executed after all the synchronous code.
 * Finally 'b' since the setTimeout callback function is placed in the macrotask queue and is executed after all microtasks like 'Promises' have been completed.
 */

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
/**
 * output:
 * 1
 * start
 * success
 *
 * reason:
 * '1' is logged first because 'fn()' is invoked and 'console.log(1)' is executed synchronously when the promise is created inside the function.
 * Then is 'start' because 'console.log("start")' is a synchronous operation that follows the function call.
 * Finally 'success' because the promise resolves immediately in the function, but '.then()' is placed in the microtask queue and only runs after all the synchronous code has been executed.
 */
