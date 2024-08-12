// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
// Output: 7
// Reason: Because if condition is meet and we 
// reassignd the value to 7 

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
// Output: 5
// Reason: var works for function bolck. We can still
// access the value a as long as it's called within the
// function

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
// Output: Error: a is not defined
// Reason: a is only accessable within the function block.
// Calling a outside of the function will result in Error.

// True Answer: 3
// Turns out that if you do not put var, let, const in front
// of the variable declaration, it become a global variable
// which is not good.

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
// Output: 6
// Reason: Since a is a global variable declared at the top
// function first() is able to access it and assign 6 to it.
// when fucntion second() is called, 6 will be printed.

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
// Output: 7
// Reason: There is local variable a in the f() function and
// there is a global variable a on the top. When a gets called
// inside of the function f(), the closest variable a is accessed.
// Therefore 7 will be printed.

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
// Output: 10
// Reason: I'm not sure what the function a() declaration does 
// inside the function b.

// True Answer: 1
// Turns out that there is function hoisting as well. In this case 
// the function a's declaration gets moved to the top of the function
// block of function b(). The assignment of a right after overwrites the
// function a() to a Number 10. The golbal variable a is not affected by
// this assignment and remain 1. Therefore the output will be 1.
