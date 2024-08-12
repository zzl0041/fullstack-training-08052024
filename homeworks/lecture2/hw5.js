// Hoisting

// 1.
// output:
// undefined
// 5
// 5
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


// 2.
// output:
// 2
// 2
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

