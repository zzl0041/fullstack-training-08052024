/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
  // implement here
}

function sum(a, b) {
  return a + b;
}

function sum(a) {
  return (b) => {
    return a + b;
  };
}
