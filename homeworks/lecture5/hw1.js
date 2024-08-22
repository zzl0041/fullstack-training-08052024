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
// "var i" is in function scope, so the "i" is same in each iteration. By the time "setTimeout" function calls, the loop is completed and "i" is 5.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 0
// 1
// 2
// 3
// 4
// "let i" declares i with block scoop.
// Each "setTimeout" callback logs the value of "i" from its own iteration.

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
// This is an IIFE function. When "setTimeout" calls, the curent "i" is passed to this IFEE function as an argument.

// 4
let fn = () => {
  console.log("I am fn");
};
setTimeout(fn, 1000);
fn = () => {
  console.log("I am another fn");
};

// I am fn.
// "setTimeout" captures the value of "fn" at the time it's invoked, not when the timeout occurs.

// 5
let obj = {
  name: "obj",
};
setTimeout(() => console.log(obj), 1000);
obj.name = "another obj";

// { name: 'another obj' }
// "setTimeout" callback captures the reference of "obj". And the "name" is changed to "another obj"
