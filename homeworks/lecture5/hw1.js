// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// output: 5 5 5 5 5
// var is function scoped, so each iteration shares the same i. By the time the callback function is called, for loop has been finished execution and i = 5. The output is five 5s.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// output: 0 1 2 3 4
// let is block scoped, so each iteration has it own i and the i is passed to each setTimeout callback function. The output is 0 1 2 3 4.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// output: 0 1 2 3 4
// An iife is invoked each iteration, then each iife creates a new function scope and passes the current i to setTimeout callback function. That is why even though a var is used in this case, the output is 0 1 2 3 4.

// 4
let fn = () => {
  console.log("I am fn");
};
// setTimeout(fn, 1000);
setTimeout(() => fn, 1000);
fn = () => {
  console.log("I am another fn");
};
// output: I am fn
// unsure this answer
// function is considered an object in JS and the variable fn stores the reference of the function. In this case, when the setTimeout called, the original fn reference is passed. Then the fn reassigned to another reference. Even though fn reference has been changed, but the original reference has been reserved when setTimeout callback executes. The output is I am fn.

// 5
let obj = {
  name: "obj",
};
setTimeout(() => console.log(obj), 1000);
obj.name = "another obj";
// output: another obj
// unlike previous example, in this case, obj is always point to same address. When setTimeout callback function executes, then obj has been updated. The output is another obj.
