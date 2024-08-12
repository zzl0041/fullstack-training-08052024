// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let largest = list[0];
    for (var i = 1; i < list.length; i++) {
        if(list[i] >= largest) {
            largest = list[i];
        }
    }
    return largest;

}

console.log(largestElement([2, 4, 5, 50, 6, 7, 9])); // 50


// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let i = 0;
    let j = list.length - 1;

    while(i < j) {
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;

        i++;
        j--;
    }

    return list;

}

console.log(reverseList([1, 2, 3, 4, 5]));  //[ 5, 4, 3, 2, 1 ]

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let counter = 0;
    for(const i of list) {
        if(i == element) {
            counter ++;
        }
        if(counter >= 2) {
            return true;
        }
    }

    return false;
}

console.log(checkTwice([1, 2, 3, 4, 2], 2)); // true
console.log(checkTwice([1, 2, 3, 4, 5], 2)); // false