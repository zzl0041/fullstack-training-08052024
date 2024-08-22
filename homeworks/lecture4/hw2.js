// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const arr = [1, 2, 3, 4, 5];
const doubleNum = arr.map(num => num * 2);
console.log(doubleNum);

// 2. Given an array of numbers, return an array of numbers that are even.
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNum = arr1.filter(num => num % 2 === 0);
console.log(evenNum);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const str = "Hello World"
const strToArr = str.split('');
const reverseArr = strToArr.map((c, index) => (strToArr[strToArr.length - 1 - index]));
let reverseString = reverseArr.join('');
console.log(reverseString);

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];
const flattenArr = arr => {
  return arr.reduce((acc, current) => {
    if (Array.isArray(current)) {
      const value = flattenArr(current);
      return acc.concat(value);
    }
    else {
      return acc.concat(current);
    }
  }, []);
}
console.log(flattenArr(arr2));