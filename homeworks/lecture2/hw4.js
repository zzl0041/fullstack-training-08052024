// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
// output: 7
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}

// 2. When executed, what value will be output?
// output: 5
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

// 3. When executed, what value will be output?
// output: 3
// `a` as a global variable
function f() {
  a = 3;
}
f();
console.log(a);

// 4.
// output: 6
// `a` as a global variable
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();

// 5.
// no output, f() is not called
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}

// 6.
// output: 1
// codes after return will not be excuted
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
