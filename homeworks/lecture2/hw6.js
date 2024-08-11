// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if (list.length === 0) {
        return null;
    }
    let max = list[0];
    for (let i = 1; i < list.length; i++) {
        max = Math.max(max, list[i]);
    }
    return max;
}
// console.log(largestElement([1, 1, 2]));
// console.log(largestElement([]));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let left = 0;
    let right = list.length - 1;
    while (left < right) {
        let temp = list[left];
        list[left] = list[right];
        list[right] = temp;
        left++;
        right--;
    }
    // return list;
}
// console.log(reverseList([1, 2, 3, 4, 5]));
// console.log(reverseList([1, 2, 3, 4]));
// console.log(reverseList([]));

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let occurence = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === element) {
            occurence++;
        }
        if (occurence >= 2) {
            return true;
        }
    }
    return false;
}
// console.log(checkTwice([1, 2, 3], 1));
// console.log(checkTwice([1, 2, 1], 1));