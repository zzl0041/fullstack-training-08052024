var a = 5;
var b = 10;
function f() {
  console.log(a); // undefined
  var a = 7;
  console.log(a);
  console.log(b);
}

f();