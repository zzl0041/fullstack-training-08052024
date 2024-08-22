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
// synchronous: a, c
// e is printed next when the Promise is created.
// The Promise resolves, so d is printed from the .then callback.
// b is printed from the setTimeout, which runs after all other synchronous and microtask code.

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

// Synchronous code:
// 1
// start
// Microtask queue: 
// success