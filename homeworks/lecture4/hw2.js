// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const arr1 = [1,2,3,4,5]
const ans1 = arr1.map(item => item * 2)

// 2. Given an array of numbers, return an array of numbers that are even.
const arr2 = [2,3,4,5,8]
const ans2 = arr2.filter(item => item % 2 === 0)

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const ans3 = Array.from(arr3).reduce((accumulate, value) =>{
    return value + accumulate
},"")

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
function recurse(arr){
    return arr.reduce((acc, val)=>{
        const tmp = Array.isArray(val)? recurse(val):val;
        return acc.concat(tmp)
    },[])
}
console.log(recurse([[0, 1], [2, 3], [4, [5, 6]]]))

