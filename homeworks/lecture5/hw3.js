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
// a
// c
// e
// d
// b

/*
For snippet 1, the order of execution is synchronous code (a, c, e), followed by the microtasks from the resolved promise (d), and finally the setTimeout callback (b).
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
// For snippet 2, the order is synchronous code (1, start), followed by the microtask from the resolved promise (success).
// 1
// start
// success
