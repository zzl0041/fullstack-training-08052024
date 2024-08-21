function counter() {
    // implement here
    let sum = 0;
    return function(n){return Number.isInteger(n)?sum+=n:sum};
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8