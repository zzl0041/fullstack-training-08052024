// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y);  // undefined, y is hoisted at the top of the function but not initialized.
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y); // 5 because y was assigned 5
}
if (x === 3) {
  console.log(y); // 5 because y retains the value 5 from the previous block
}


// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x); // 2, here, does not create a new variable; it reassigns the existing x variable (which was declared earlier with var). So x is now 2.
}
console.log(x); // 2, the variable x still holds the value 2 because the var declaration inside the if block affected the same x variable that was declared outside the block.

