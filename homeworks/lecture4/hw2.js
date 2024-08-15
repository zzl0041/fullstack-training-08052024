// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const doubleArray = (arr) => {
  return arr.map((num) => 2 * num)
}

// 2. Given an array of numbers, return an array of numbers that are even.
const evenNumbers = (arr) => {
  return arr.filter((num) => num % 2 === 0)
}

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const reverseString = (str) => {
  return str.split('').reduce((ans, char) => char + ans, '')
}

// console.log(reverseString('Hello World'))

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const flattenArray = (arr) => {
  return arr.reduce((ans, cur) => ans.concat(cur), [])
}

// console.log(
//   flattenArray([
//     [0, 1],
//     [2, 3],
//     [4, 5],
//   ])
// )
