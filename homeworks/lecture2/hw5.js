// Hoisting

// 1.
//undefined, 5, 5
//1st console.log: y has been declared by hoisting, but not yet assigned
//2nd console.log: y has been assigned as 5
//3rd console.log: x has been assigned as 3 to run the console.log
var x

if (x !== 3) {
  console.log(y)
  var y = 5
  if (y === 5) {
    var x = 3
  }
  console.log(y)
}
if (x === 3) {
  console.log(y)
}

// 2.
//2, 2
//var x = 2 has the function scope for both console.log
var x = 3
if (x === 3) {
  var x = 2
  console.log(x)
}
console.log(x)
