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
// a is declared with var, then it can be re-assigned value. a = 10 which is greater than 5. It re-assigns to 7. After the re-assignment, console.log(a), the output is 7.

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
// output: 5
// when function executed. if (true) state is execute, a variable a is declared and assigned to the value 5. The output is 5

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
// in JS, if a variable is assigned a value without being declared using any variable declaration keyword, such as 'var', 'let', 'const'. It is implicitly declared as a global variable.
// In above case, when function f executed, a global variable named a will be initialize with value 3. The output is 3.

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
// When function first executed, a re-assigned to value 6. function second is executed, it console log the variable a. The output is 6.

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
// output: 7
// Javascript will first look for the variable inside of current scope, then outer scope until if finds the variable or reach the null layer. In above example, the closest variable a is valued 7, the output is 7

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
// Inside of function b, a is hoisted to the top of function b scope. Then, it assigned to value 10. In this case, there are two variables called a. One is the outside of function b and its value is 1. The other is inside of function b. After function b is executed, console.log(a) actually accesses to the variable a outside of b and it remains 1. The output is 1.
