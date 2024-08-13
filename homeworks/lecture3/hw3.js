// closure
// return function declaration not execution!

// Solution #1: set default parameter
// function counter() {
//   // implement here
//   let counts = 0;
//   return function add(num = 0) {
//     counts += num;
//     return counts;
//   };
// }

// Solution #2: using argument2.length
function counter() {
  // implement here
  let counts = 0;
  return function add() {
    if (arguments.length === 1) {
      counts += arguments[0];
    }
    return counts;
  };
}

let count = counter();
console.log(count(3)); // Output: 3
console.log(count(5)); // Output: 8 (3 + 5)
console.log(count()); // Output: 8
