// what is the output in order? and explain why?

// 1
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));
// a c e d b
/* console.log('a') and console.log('c') will be first put into callstack and executed.
Since Promise is microtask, setTimeout is macrotask, setTimeout is executed after Promise.
Promise is created and its executor function is executed immediately. 
resolve('d'), console.log('e'), reject('f') are in the callback queue first
cosole.log('e') will be logged to the console immediately.
resolve('d') is called, but .then callback will return after promise is resolved
*/


// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
// 1 start success
/* 
When fn is invoked, it will immediately create new promise, 
then concole.log(1) will run and output 1, because once the promise constructor is called, 
the executor function inside will run sychronously.
console.log('start) runs since it is remaining synchronous code.
.then() executes after promise is resolved adn output success.
 */
