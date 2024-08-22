// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    const max_ = -Infinity;
    for(let val of list) max_ = Math.max(max_, val)
    return max_
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    const left = 0
    const right = list.length -1 
    while (left != right){
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    }
    return list
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let ans = 0
    for (let val of list){
        if (val == element){
            ans ++
            if (ans >= 1){
                return true
            }
        }
    }
    return false
}