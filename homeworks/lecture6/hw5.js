// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  let counter = 1;

  function run() {
    return new Promise(resolve => {
      const intervalId = setInterval(() => {
        console.log(counter);
        counter++;

        if (counter > 3) {
          //reset counter afer 3
          counter = 1;
        }

        // Resolve the promise and clear the interval to stop execution
        if (counter === 1) {
          clearInterval(intervalId);
          resolve();
        }
      }, 1000);
    });
  }

  run().then(() => {
    // Call the function again to create a loop
    return print();
  });
}

print();


// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here

  let counter = 0
  function run() {
    return new Promise(resolve => {
      const intervalId = setInterval(() => {
        console.log(nums[counter]);
        counter++;

        if (counter > nums.length - 1) {
          //reset counter after reach the end of the list
          counter = 0;
        }

        // Resolve the promise and clear the interval to stop execution
        if (counter === 0) {
          clearInterval(intervalId);
          resolve();
        }
      }, 1000);
    });
  }

  run().then(() => {
    // Call the function again to create a loop
    return printList();
  });
}

//printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('red');
      resolve();
    }, 2000);
  }).then(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('green');
        resolve();
      }, 500);
    });
  }).then(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('yellow');
        resolve();
      }, 2000);
    });
  }).then(() => {
    return trafficLight(); // Repeat the sequence
  });
}

//trafficLight()
