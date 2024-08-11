// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
    var a = 10;
    if (a > 5) {
        a = 7;
    }
    console.log(a);
}
// 7
// The if statement is true and update the value of a to 7.

// 2. When executed, what value will be output?
function f() {
    if (true) {
        var a = 5;
    }
    console.log(a);
}
// 5
// 'var' is function scope, and the variable declaration of a is hoisted to the top of the function. Since the if statement is always true, a is set to 5 and is accessible in the output.

// 3. When executed, what value will be output?
function f() {
    a = 3;
}
f();
console.log(a);
// 3
// a is declared without using 'var', 'let', or 'const', it is implicitly a global variable.

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
// 6
// a is declared with 'var' outside the function, so it has global scope. It is accessible in both first() and second().

// 5.
var a = 5;
function f() {
    var a = 7;
    console.log(a);
}
// 7
// Inside f(), a is re-declared using 'var' and assigned the value 7. This new declaration creates a separate 'a' that exists only within the function's scope.

// 6.
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);
// 1
// In b(), the declaration of 'a' as a function is hoisted to the top of the function b.
// function b() {
//   function a() {}
//   a = 10;
//   return;
// }
// a = 10 only affects the local 'a', which was originally a function but got overwritten by 10, and does not affect the global 'a'.
