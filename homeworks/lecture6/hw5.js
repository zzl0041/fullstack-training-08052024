// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const printNumber = async () => {
    for (let i = 1; i <= 3; i++) {
      console.log(i)
      await delay(1000)
    }
  }

  printNumber()
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2]

function printList() {
  // your code here
  nums.reduce((pre, num) => {
    setTimeout(() => {
      console.log(num)
    }, pre)

    return pre + 1000
  }, 0)
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const colors = ['red', 'green', 'yellow']
  const delay = 1000

  const changeColor = (i) => {
    console.log(colors[i])

    setTimeout(() => {
      changeColor((i + 1) % 3)
    }, delay)
  }

  changeColor(0)
}
