// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    if(list.length === 0) return null;
    // list.sort();
    // return list[list.length - 1];
    let largest = -Infinity;
    for(let i = 0; i < list.length; i++) {
        if(list[i] > largest) {
            largest = list[i];
        }
    }
    return largest;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
   if(list.length === 0) return null;
//    return list.reverse();
   let left = 0;
   let right = list.length - 1;
   while(left < right) {
    [list[left], list[right]] = [list[right], list[left]];
    left++;
    right--;
   }
   return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    if(list.length === 0) return null;
    // using hash map
    // let map = new Map();
    // for(let i = 0; i < list.length; i++) {
    //     if(!map.has(list[i])) {
    //         map.set(list[i], 1);
    //     } else {
    //         return true
    //     }
    // }
    // return false
    for(let i = 0; i < list.length; i++) {
        if(list[i] === element) {
            count++;
        }
        if(count >= 2) return true;
    }
}

var myList = [1, 5, 6, 12, 9, 4, 45];
console.log(largestElement(myList));
console.log(reverseList(myList));
console.log(checkTwice(myList))