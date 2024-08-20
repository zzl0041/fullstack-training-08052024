// what is the output of the following code? and explain why?

// 1
// 5 5 5 5 5, since callback can access var even main function is finished
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000)
}

// 2
// 0 1 2 3 4, since let has the block scope, callback gets the i value every time setTimeout calls it
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000)
}

// 3
// 0 1 2 3 4, since value i is passed to IIFE to use
for (var i = 0; i < 5; i++) {
  ;(function (i) {
    setTimeout(() => console.log(i), 1000)
  })(i)
}

// 4
// I am fn, since setTimeout will capture the orignal reference fn
let fn = () => {
  console.log('I am fn')
}
setTimeout(fn, 1000)
fn = () => {
  console.log('I am another fn')
}

// 5
// another obj, since the change of property of a instance will not change the reference of the object
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000)
obj.name = 'another obj'
