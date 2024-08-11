// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y);
  // output: undefined
  // reason: y is hoisted at the top of the function but not initialized.
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);
  // output: 5
  // reason: y is assigned to 5.
}
if (x === 3) {
  console.log(y);
  // output: 5
  // reason: x is assigned to 3 above.
}



// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
  // output: 2
  // reason: x is reassgined to 2 inside to block.
}
console.log(x);
// output: 2
// reason: x is reassigned to 2 inside the if block. since x is defined with var, it is function-scoped, so the reassignment affects the outer x.
