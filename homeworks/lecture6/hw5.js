// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  function myPromise(value) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), 1000);
    });
  }

  let n = 1;
  myPromise(n)
    .then((res) => {
      console.log(res);
      return myPromise(++n);
    })
    .then((res) => {
      console.log(res);
      return myPromise(++n);
    })
    .then((res) => {
      console.log(res);
    });
}
// ------ testing ------
// print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here

  nums.reduce((myPromise, num) => {
    return myPromise.then(() => {
      return new Promise((res) => {
        setTimeout(() => {
          console.log(num);
          res();
        }, 1000);
      });
    });
  }, Promise.resolve());
}
// ------ testing ------
// printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const trafficLights = [
    { color: "red", delay: 1000 },
    { color: "green", delay: 2000 },
    { color: "yellow", delay: 3000 },
  ];

  function trafficLightsLoop() {
    trafficLights
      .reduce((myPromise, light) => {
        return myPromise.then(() => {
          return new Promise((res) => {
            setTimeout(() => {
              console.log(light.color);
              res();
            }, light.delay);
          });
        });
      }, Promise.resolve())
      .then(trafficLightsLoop);
  }
  trafficLightsLoop();
}
// ------ testing ------
trafficLight();
