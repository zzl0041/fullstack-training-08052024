// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.

// 2. Given an array of numbers, return an array of numbers that are even.

// 3. Reverse the string: "Hello World" -> "dlroW olleH"

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const nums = [1, 2, 3, 4];
const doubleNums = nums.map((num) => {
    return num * 2;
})
console.log(doubleNums);


const evenNums = nums.filter((num) => {
    return num % 2 === 0
})
console.log(evenNums)


const str = 'Hello World'
const reverseStr = str.split('').map((value, index, array) => {
    return array[array.length - 1 - index];
}).join('')

console.log(reverseStr)


const arr = [[0, 1], [2, 3], [4, [5, 6]]];


function flatArr(acc, value) {
    if(!Array.isArray(value)){
        return acc.concat(value);
    } else {
        return acc.concat(value.reduce(flatArr, []));
    }
}


console.log(arr.reduce(flatArr, []))