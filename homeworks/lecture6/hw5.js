// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  })
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(2);
          resolve();
        }, 1000);
      });
    })
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(3);
          resolve();
        }, 1000);
      });
    });
}

print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promise, num) => {
    return promise.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(num);
          resolve();
        }, 1000);
      });
    });
  }, Promise.resolve());
}

printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  function changeLight(color, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(color);
        resolve();
      }, delay);
    });
  }

  function startTrafficLight() {
    changeLight("red", 1000)
      .then(() => changeLight("green", 1000))
      .then(() => changeLight("yellow", 1000))
      .then(startTrafficLight); // Loop back to start the sequence again
  }

  startTrafficLight();
}

trafficLight();
