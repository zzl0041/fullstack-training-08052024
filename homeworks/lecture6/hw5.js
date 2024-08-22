// 1. use `promise` to print 1, 2, 3 in every 1 second
async function print() {
  // your code here
  let nums = [1, 2, 3];
  for (let num of nums) {
    console.log(num);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}
print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];
function printList() {
  // your code here
  nums.reduce((printChain, current) => {
    return printChain.then(() => {
      console.log(current);
      return new Promise(resolve => setTimeout(resolve, 1000));
    })
  }, Promise.resolve());
}
printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
async function trafficLight() {
  // your code here
  const lights = ['red', 'green', 'yellow'];
  let current = 0;
  while (true) {
    console.log(lights[current]);
    await new Promise(resolve => setTimeout(resolve, 3000));
    //Delay time of every light is 3s
    current = (current + 1) % 3
    // count the light
  }
}

trafficLight();
