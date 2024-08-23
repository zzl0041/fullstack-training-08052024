// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// output: 5 5 5 5 5
// reason: setTimeout excute after 1 second instead of immediately. WHen it is excuted, the for loop is completed and variable i, which is declared by var (functionally scope), now is 5.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// output: 0 1 2 3 4
// reason: the variable i is declared by let, which is block scope, so the i is independent for each iteration.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// output: 0 1 2 3 4
// reason: IIFE is invokled immediately with current i in each interation.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// output: I am fn
// reason: When fn is passed to setTimeout, it captures the reference to the function as it was at that moment. The reassignment of fn to a different function happens after setTimeout is set up, but the reference to the original function has already been captured by setTimeout.
// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// output: { name: 'another obj' }
// reason: the object obj is passed by reference, so it will be modified before setTimeout is excuted.