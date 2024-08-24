// what is the output of the following code? and explain why?

// 1. Using `var` in a loop with `setTimeout`
console.log('1. Using var:');
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//var is function-scoped or globally scoped, not block-scoped
// 1. Using var:
// 5
// 5
// 5
// 5
// 5

// 2. Using `let` in a loop with `setTimeout`
console.log('2. Using let:');
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//let is block-scoped, each iteration of the loop has its own 'i' variable
// 2. Using let:
// 0
// 1
// 2
// 3
// 4


// 3. Using an IIFE (Immediately Invoked Function Expression) with `var`
console.log('3. Using IIFE with var:');
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//The IIFE creates a new scope for each iteration, capturing the current value of 'i'
// 3. Using IIFE with var:
// 0
// 1
// 2
// 3
// 4


// 4. Changing the function reference before `setTimeout` executes
console.log('4. Changing function reference:');
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
//before setTimeout executes, the reference to fn is changed to a new function (I am another fn).
// 4. Changing function reference:
// I am another fn

// 5. Modifying an object before `setTimeout` executes
console.log('5. Modifying object property:');
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
//Before the callback executes, the name property of obj is changed to 'another obj'.
// 5. Modifying object property:
// { name: 'another obj' }
