/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    if (arguments.length === 1 && typeof arguments[0] === 'number') {
        let a = arguments[0];
        return function(b) {
            return a + b;
        }
    } else {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
}

console.log(sum(2)(3) === 5)
console.log(sum(2, 3) === 5)
