// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here 
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const printDigit = async () => {
    for (let i = 1; i <= 3; i++) {
      console.log(i);
      await delay(1000);
    }
  }
  printDigit();
}
print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  nums.reduce((promise, num) => {
    return promise.then(() => {
      console.log(num);
      return delay(1000);
    });
  }, Promise.resolve());
}
printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  async function changeColor( ) {
    while (true) {
      console.log('red');
      await delay(3000);
      console.log('green');
      await delay(2000);
      console.log('yellow');
      await delay(1000);
    }
  }
  changeColor();
}
trafficLight();