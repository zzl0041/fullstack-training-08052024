// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const doubled = function(arr){
    return arr.map(function(num){
        return num * 2;
    });
};
// 2. Given an array of numbers, return an array of numbers that are even.
const even = function(arr){
    return arr.filter(function(num){
        return num % 2 == 0;
    })
}
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const reverse = function(str){
    return str.split('').reduce(function(reversed, char){
        return char + reversed;
    }, '');
}
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const flatten = function(arr){
    return arr.reduce(function(flattened, item){
        return flattened.concat(Array.isArray(item)?flatten(item):item);
    },[]);
}
const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];
console.log(flatten(arr2)); // Output: [0, 1, 2, 3, 4, 5, 6]