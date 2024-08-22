// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  function delay(ms){
    return new Promise((resolve)=>{
      setTimeout(resolve,ms)
    })
  }

  delay(1000)
  .then(()=>{
    console.log(1)
    delay(1000)
  }).then(()=>{
    console.log(2)
    delay(1000)
  }).then(()=>{
    console.log(3)
  })
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((acc, value)=>{
    return acc.then(()=>{
      console.log(value)
      return new Promise(resolve=>{
        setTimeout(resolve,1000)
      })
    })
    
  }, Promise.resolve())
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const light = ['red', 'green','yellow']
  let ans = ""
  for (let i = 0; i <= 3; i++){
    light.reduce((acc, value)=>{
      return acc.then(()=>{
        ans = ans + "->" + value
        return new Promise(resolve=>{
          setTimeout(resolve,1000)
        })
      })
    }, Promise.resolve()).then(()=>{
      return ans
    })
  }
}
