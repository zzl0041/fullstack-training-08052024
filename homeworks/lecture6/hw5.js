// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log(1);
        resolve();
    }, 1000);
  }).then(()=> {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(2);
            resolve();
        }, 1000);
    });
  }).then(()=> {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
          console.log(3);
          resolve();
      }, 1000);
    });
  });
}
// print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList(nums) {
  // your code here
  let task = Promise.resolve();
  nums.forEach((num) => {
    task = task.then(()=> {
      return new Promise(function (resolve, reject) {
          setTimeout(() => {
              console.log(num);
              resolve();
          }, 1000);
      });
    });
  });
}
// printList([3, 1, 6, 9, 2]);

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  let output_list = ['red', 'green', 'yellow'];
  let count = 0;
  let task = setInterval(() => {
    console.log(output_list[count % output_list.length]);
    count++;
  }, 1000);
}
trafficLight();
