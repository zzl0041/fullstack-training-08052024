/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */

function sum(a, b) {
  if (arguments.length === 1) {
    return (c) => a + c
  } else if (arguments.length === 2) {
    return a + b
  }
}

console.log(sum(2)(3) === 5)
console.log(sum(2, 3) === 5)
