// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 5
// 5
// 5
// 5
// 5
// setTimeout is 
// Because var is function-scoped, all setTimeout callbacks access the same variable i . Since the value of i is 5 when the loop ends, all console.log(i) will output 5.
// setTimeout is asynchronous, it starts executing the callback function after the loop ends.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0
// 1
// 2
// 3
// 4
// Declaring i with let creates a new block scope in each loop iteration. This means that i will have its own independent scope in each iteration, and different setTimeout callback functions will refer to different i.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// 0
// 1
// 2
// 3
// 4
// IIFE(Immediately Invoked Function Expression) creates an independent scope and passes the current iteration's i value to it. The value of i in this independent scope is unique and fixed, ensuring that the value of i remains unchanged when the setTimeout callback function is executed.


// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// I am fn
// The final output is "I am fn" because setTimeout captures and saves the reference to the fn function at the time it is called. 
// Even if the fn variable is reassigned after setTimeout is set, the reference inside setTimeout still points to the original function, so the output is not affected.

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// { name: 'another obj' }

// In JavaScript, objects are reference types. The variable obj actually holds the reference address of the object in memory, not the specific value of the object.
// When you pass obj to the callback function of setTimeout, what is passed is actually a reference to obj. This means that no matter how the content of obj changes later, the callback function will access the latest state of obj when it is executed.