// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  if (list.length === 0) {
    throw new Error('List is empty')
  }
  let ans = list[0]
  for (const cur of list) {
    if (cur > ans) {
      ans = cur
    }
  }
  return ans
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  let start = 0
  let end = list.length - 1
  while (start < end) {
    swap(list, start++, end--)
  }
}

const swap = (list, start, end) => {
  const tmp = list[start]
  list[start] = list[end]
  list[end] = tmp
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
  let count = 0
  for (const cur of list) {
    if (cur === element) {
      count++
    }
    if (count === 2) {
      return true
    }
  }
  return false
}
