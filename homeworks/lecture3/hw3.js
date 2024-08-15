function counter() {
    // implement here
    var n = 0

    function count() {
        if(arguments.length === 1) {
            n += arguments[0]
        }
        return n;
      }

    return count;
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8