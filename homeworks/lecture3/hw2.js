/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // implement here
    const args = Array.from(arguments);
    if (args.length === 1) {
        return function (num) {
            return args[0] + num;
        }
    }
    
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
console.log(sum(2)(3) === 5)
console.log(sum(2, 3) === 5)