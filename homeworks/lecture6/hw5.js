// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  delay(1000)
    .then(()=>{
      console.log(1);
      return delay(1000);
    })
    .then(()=>{
      console.log(2);
      return delay(1000);
    })
    .then(()=>{
      console.log(3);
    });
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  nums.reduce((promiseChain, num)=>{
    return promiseChain.then(()=>{
        console.log(num);
        return delay(1000);
      });
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const delay = (ms) => new Promise(resole => setTimeout(resolve, ms));
  async function cycleLights(){
    while(true){
      console.log('red');
      await delay(2000);
      console.log('green');
      await delay(3000);
      console.log('yellow');
      await delay(1000);
    }
  }
  cycleLights();
}
