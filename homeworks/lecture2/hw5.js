// Hoisting

// 1.
var x;

if (x !== 3) {
    console.log(y); // undefined. y is hoisted to the top, so it is declared but not yet initialized.
    var y = 5;
    if (y === 5) {
        var x = 3;
    }
    console.log(y); // 5. y has been set to 5.
}
if (x === 3) {
    console.log(y); // 5. x has been set to 3 so this if statement is true. y is accessible and is still 5.
}

// 2.
var x = 3;
if (x === 3) {
    var x = 2;
    console.log(x); // 2.
}
console.log(x); // 2.
// The code is same as:
// var x;
// x = 3;
// if (x === 3) {
//     x = 2;
//     console.log(x);
// }
// console.log(x);
// Declaring 'var x = 2' inside the if block does not create a new variable. It reassigns the existing x in the global scope.
