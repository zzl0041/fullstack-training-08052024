// closure
// return function declaration not execution!
function counter() {
  // implement here
  let counts = 0;
  return function add(num = 0) {
    counts += num;
    return counts;
  };
}

let count = counter();
console.log(count(3)); // Output: 3
console.log(count(5)); // Output: 8 (3 + 5)
console.log(count()); // Output: 8
