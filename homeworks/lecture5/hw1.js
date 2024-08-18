// what is the output of the following code? and explain why?

// 1
// output: 5 lines' 5. 
// setTimeout queue a task to callback queue, which is after the looping task.
// and var i is global crossing the looping, thus i will be 5 for all setTimeout tasks.
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}



// 2
// output: 0\n1\n2\n3\n4\n
// let i is individual inside block for each loop, thus i will be increasing for each setTimeout task.
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 3
// output: 0\n1\n2\n3\n4\n
// iife is excecuted to call setTimeout, making the input value is determined before setTimeout enqueue the task.
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// 4
// output: I am fn
// fn's value is passing to setTimeout but not reference, 
// thus changing fn will not affect setTimeout's original function
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// 5
// output: {name: 'another obj'}
// the input of the callback function is traced when it is excecuted.
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';