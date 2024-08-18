// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const double = (arr) => arr.map(elm => elm*2);

console.log(double([1,2,3]));

// 2. Given an array of numbers, return an array of numbers that are even.
const even = (arr) => arr.filter(elm => !(elm % 2));

console.log(even([1,2,3]));


// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const rerverse = (arr) => arr.map((elm, idx) => arr[arr.length - 1 - idx]);

console.log(rerverse([1,2,3]));

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const flatten = (arr) => arr.reduce((new_arr, elm) => {
    if (typeof elm != "object") {
        new_arr.push(elm);
        return new_arr;
    }
    else {
        return new_arr.concat(flatten(elm));
    }
}, [])

console.log(flatten([[0, 1], [2, 3], [4, 5]]));
console.log(flatten([[0, 1], [2, 3], [4, [5, 6]]]));