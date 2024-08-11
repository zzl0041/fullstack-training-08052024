// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  // implement your code here
  let largest = -Infinity;
  for (const ele of list) {
    if (ele > largest) {
      largest = ele;
    }
  }
  return largest;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  // implement your code here c
  if (list.length === 1) return;
  let left = 0;
  let right = list.length - 1;
  while (left < right) {
    let temp = list[left];
    list[left] = list[right];
    list[right] = temp;
    left++;
    right--;
  }
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
// solution #1
function checkTwice(list, element) {
  // implement your code here
  let counts = 0;
  for (const ele of list) {
    if (ele === element) {
      counts++;
    }
  }
  return counts >= 2 ? true : false;
}

// solution #2
function checkTwice(list, element) {
  const filterList = list.filter((ele) => ele === element);
  return filterList.length >= 2 ? true : false;
}
