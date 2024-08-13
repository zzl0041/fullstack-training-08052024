/** write a function to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
  // implement here
  if (arguments.length === 2) return arguments[0] + arguments[1];
  if (arguments.length === 1) {
    const outerArg = arguments[0];
    return function (arg) {
      return outerArg + arg;
    };
  }
  throw new Error("Invalid input");
}

console.log(sum(2)(3) === 5);
console.log(sum(2, 3) === 5);
