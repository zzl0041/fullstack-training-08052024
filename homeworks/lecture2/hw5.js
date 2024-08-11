// Hoisting

// 1.
var x;

// now, x has not been assigned to any value, x !== 3 is true
if (x !== 3) {
  console.log(y); // output: undefined. Since it has not assigned to any value
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y); // output: 5
}
// now, x has been assigned to 3, x === 3 is true
if (x === 3) {
  console.log(y); // output: 5
}

// 2.
var x = 3; // declare x and assigned value 3
if (x === 3) {
  var x = 2; // re-declare x and assigned value 3
  console.log(x); // output: 2
}
console.log(x); // output: 2
