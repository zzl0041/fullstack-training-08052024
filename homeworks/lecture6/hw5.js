// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const printNum = async () => {
    await delay(1000);
    console.log(1);
    await delay(1000);
    console.log(2);
    await delay(1000);
    console.log(3);
  };
  printNum();
}
print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  nums.reduce((promise, num) => {
    return promise.then(() => {
      return delay(1000).then(() => {
        console.log(num);
      });
    });
  }, Promise.resolve());
}
printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const changeColor = async () => {
    while (true) {
      await delay(1000);
      console.log("red");
      await delay(1000);
      console.log("green");
      await delay(1000);
      console.log("yellow");
    }
  };
  changeColor();
}
trafficLight();
