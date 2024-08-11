// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    if (list.length === 0) {
        return null;
    }
    let largest = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > largest) {
            largest = list[i];
        }
    }
    return largest;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    if (list.length <= 1) {
        return list;
    }
    let left = 0,
        right = list.length - 1;
    while (left < right) {
        const tmp = list[left];
        list[left] = list[right];
        list[right] = tmp;
        left++;
        right--;
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    let count = 0;
    for (let num of list) {
        if (num === element) {
            count++;
        }
    }
    return count >= 2;
}
