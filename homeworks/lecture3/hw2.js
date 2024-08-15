/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // implement here
    if (arguments.length == 1) {
        return (...params) => [...params, ...arguments].reduce(
            (val, total) => total+=val
        );
    }
    return [...arguments].reduce(
        (val, total) => total+=val
    );
    
}

console.log(sum(2)(3) === 5)
console.log(sum(2, 3) === 5)
