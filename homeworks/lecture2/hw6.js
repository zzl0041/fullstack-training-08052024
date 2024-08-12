// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    return list.reduce((elm, max_elm) => elm > max_elm ? elm : max_elm, 0);
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    for (let i = 0; i < Math.floor(list.length / 2); i++) {
        [list[i], list[list.length-1-i]] = [list[list.length-1-i], list[i]]
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    let count = 0;
    for (let elm of list) {
        if (elm === element) {
            count++;
            if ((count) > 1) {
                return true;
            }
        }
    }
    return false;
}

console.log(checkTwice([1,3,5,3, 6,7], 3));