// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function doubledArr(arr) {
  return arr.map((ele) => ele * 2);
}

// testing
const newArr = doubledArr([1, 2, 3, 4]);
console.log(newArr);

// 2. Given an array of numbers, return an array of numbers that are even.
function filterEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// testing
const evenArr = filterEven([1, 2, 3, 4, 5, 6]);
console.log(evenArr);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverseStr(str) {
  return str
    .split("")
    .reduce((reversedStr, curChar) => curChar + reversedStr, "");
}

// testing
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

// function flattenArr(arr) {
//   return arr.reduce((accumulator, curVal) => {
//     // if curVal is not an array, concat curVal
//     if (!Array.isArray(curVal)) {
//       return accumulator.concat(curVal);
//     }
//     // if curVal is an array, flatten curVal arr and concat it
//     return accumulator.concat(flattenArr(curVal));
//   }, []);
// }

// simplifier version
function flattenArr(arr) {
  return arr.reduce((accumulator, curVal) => {
    return accumulator.concat(
      Array.isArray(curVal) ? flattenArr(curVal) : curVal
    );
  }, []);
}

// testing
console.log(
  flattenArr([
    [0, 1],
    [2, 3],
    [4, 5],
  ])
);

console.log(
  flattenArr([
    [0, 1],
    [2, 3],
    [4, [5, 6]],
  ])
);
