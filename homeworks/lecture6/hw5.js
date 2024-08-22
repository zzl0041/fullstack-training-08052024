// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  new Promise((resolve) => {
    console.log(1);
    setTimeout(resolve, 1000);
  })
    .then(() => {
      console.log(2);
      return new Promise((resolve) => setTimeout(resolve, 1000));
    })
    .then(() => {
      console.log(3);
      return new Promise((resolve) => setTimeout(resolve, 1000));
    });
}

//print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promise, num) => {
    return promise.then(() => {
      return new Promise((resolve) => {
        console.log(num);
        setTimeout(resolve, 1000);
      });
    });
  }, Promise.resolve());
}

//printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const lights = ["red", "green", "yellow"];
  let current = 0;
  function changeLight() {
    console.log(lights[current]);
    current = (current + 1) % lights.length;
    setTimeout(changeLight, 1000);
  }
  changeLight();
}

//trafficLight();
