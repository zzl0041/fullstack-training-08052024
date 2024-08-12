// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if (list.length === 0) {
        return list;
    }
    let max = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    var len = list.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        let temp = list[i];
        list[i] = list[len - 1 - i];
        list[len - 1 - i] = temp;
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    var count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === element) {
            count++;
        }
        if (count >= 2) {
            return true;
        }
    }
    return false;
}