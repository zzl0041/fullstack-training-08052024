/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // implement here
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    }
    else {
        let arg0 = arguments[0];
        // return another function to get another argument
        return function (arg1) {
            return arg0 + arg1;
        }
    }
}

console.log(sum(2)(3));
console.log(sum(2, 3));