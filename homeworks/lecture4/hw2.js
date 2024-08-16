// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function doubledNumbers(arr) {
  return arr.map((num) => num * 2);
};
console.log(doubledNumbers([1, 2, 3]));

// 2. Given an array of numbers, return an array of numbers that are even.
function evenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(evenNumbers([0, 1, 2, 3]));

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverseString(s) {
  return s.split('').map(char => char).reduce((reversed, char) => char + reversed, '');
}
console.log(reverseString('Hello World'));

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
function flattenArray(arr) {
    return arr.reduce((result, current) => {
        return result.concat(Array.isArray(current) ? flattenArray(current) : current);
      }, []);
}
console.log(flattenArray([[0, 1], [2, 3], [4, 5]]));
console.log(flattenArray([[0, 1], [2, 3], [4, [5, 6]]]));