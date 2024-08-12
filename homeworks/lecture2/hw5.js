// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y);
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);
}
if (x === 3) {
  console.log(y);
}

// Above will become:
var x;
var y;

if (x !== 3) {
  console.log(y); // y is undefined at this line
  y = 5;
  if (y === 5) {  // y is 5
    x = 3;        // x gets assigned to 3
  }
  console.log(y);
}
if (x === 3) {    // x is 3
  console.log(y); // y is 5
}

// Output:
// undefined
// 5
// 5

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

// Above will become:
var x;
x = 3;
if (x === 3) {    // x is 3
  x = 2;          // now x is 2
  console.log(x); // Outputs 2
}
console.log(x);   // also outputs 2

// Output:
// 2
// 3