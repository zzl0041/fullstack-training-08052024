// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
// output: 7
// reason: a is declared as 10, which is > 5, so a is reassigned to 7.

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
// output: 5
// var is function-scoped, the condition is always true, so a is assigned to 5, and it is accessible outside of the block and can be logged.

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
// output: 3
// reason: a is a global variable since it is defined without var, let or const, so it can be logged outside of the function.

// 4.
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();
// output: 6
// reason: a is a global variable since it is defined with var outside of functions, so it will be reassigned to 6 in first() and logged in second().

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
// output: 7
// reason: Inside f() it declares a new local variable a using var, which will be logged inside the function.

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
// output: 1
// reason: a is a global variable, the function a() is hoisted to the top of the function b().
// a = 10 only changes the lcoal variable a, not the global variable a.
