/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // implement here
    const args = Array.from(arguments);
    if(args.length<2) return function(n) {
        return args[0] + n;
    }
    let res = 0;
    args.forEach(function(n){
        res+=n;
    });
    return res;
}
console.log(sum(2)(3))
console.log(sum(2, 3))
