/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    if (arguments.length === 2) {
        // If two arguments are passed, return their sum directly
        return arguments[0] + arguments[1];
    } else if (arguments.length === 1) {
        // If one argument is passed, return a function that expects the second argument
        let a = arguments[0];
        return function(b) {
            return a + b;
        };
    }
}

// Test cases
console.log(sum(2)(3) === 5); // true
console.log(sum(2, 3) === 5); // true

// Currying