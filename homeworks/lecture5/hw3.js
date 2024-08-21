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
// output: a c e d b
// reason: 
// 1. a: synchronous, excuted immediately.
// 2. c: synchronous, excuted immediately.
// 3&4. e d: Promise runs synchronously. first resolve(d) is immediately called then the promise is fullfilled. then the console.log(e) which is synchronous, is excuted immediately.
// since Promise is fullfilled right now, the reject(f) doesn't affect anything.
// after that, then(result => console.log(result)) is excuted, which is asynchronous, so it is pushed to the microtask queue and being excuted.
// 5. b: setTimeout is pushed to the macrotask queue, so it is excuted after all the microtask queue is empty.

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
// output: 1 start success
// reason: Promise runs synchronously. console.log(1) is excuted immediately(At this time the syncronous operation console.log('start') will be excuted immediately). Then the promise is fullfilled. then the console.log(res) which is asynchronous, is pushed to the microtask queue and being excuted.