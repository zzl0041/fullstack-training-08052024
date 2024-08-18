// ONLY use map, filter, reduce to solve the following problems:
const arr = [1, 2, 3, 4];

// 1. Given an array of numbers, return an array of numbers that are doubled.
const doubleArr = (arr) => arr.map((num) => num * 2);
console.log(doubleArr(arr));

// 2. Given an array of numbers, return an array of numbers that are even.
const filterEven = (arr) => arr.filter((num) => num % 2 === 0);
console.log(filterEven(arr));

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const reverseStr = (str) => str.split("").reduce((acc, val) => val + acc, "");
console.log(reverseStr("Hello World"));

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const flattenArr = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArr(val): val), [])
const arr1 = [[0, 1], [2, 3], [4, 5]];
console.log(flattenArr(arr1));
const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];
console.log(flattenArr(arr2));