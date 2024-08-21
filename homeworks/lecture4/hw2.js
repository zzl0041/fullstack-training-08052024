// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const nums = [1, 2, 3, 4, 5];
function doubleNums(nums) {
  return nums.map(num => num * 2);
}
console.log(doubleNums(nums)); // [ 2, 4, 6, 8, 10 ]

// 2. Given an array of numbers, return an array of numbers that are even.
const nums2 = [1, 2, 3, 4, 5];
function evenNums(nums) {
  return nums.filter(num => num % 2 === 0);
}
console.log(evenNums(nums2)); // [ 2, 4 ]

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const str = "Hello World";
function resverseStr(str) {
  return str.split('').reduce((acc, cur) => {return cur + acc;}, '');
}
console.log(resverseStr(str)); // dlroW olleH

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
// const arr = [[0, 1], [2, 3], [4, 5]];
const arr = [[0, 1], [2, 3], [4, [5, 6]]];
function flattenedArr(arr) {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flattenedArr(cur) : cur); 
  }, []);
}
console.log(flattenedArr(arr)); // [ 0, 1, 2, 3, 4, 5, 6 ]