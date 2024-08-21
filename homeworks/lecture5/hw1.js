// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output:5
//        5
//        5
//        5
//        5
// Reason: Beacse i is share to all of the function calls
// and will be 5 after the for loop completes, all of the
// console.log() in the tasks queue will be executed with 
// i = 5.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output:0
//        1
//        2
//        3
//        4
// Reason: Since we use let insead of var and it's block 
// scope, therefore each console.log() will have their own
// i, increasing from 0 to 4.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// Output:0
//        1
//        2
//        3
//        4
// Reason: We are still using var here but we have an IIFE 
// function inside the for loop. In each for loop iteration
// the i is passthrough the IIFE function to the console.log
// therefore the output will be increasing.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// Output: I am fn
// Reason: Even through the reasignment of the function fn
// will be exectute before the function fn gets called, I think
// the function is already been saved to the task queue and will
// not be effected by the later code.

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// Output:{name: 'another obj'}
// Reason: Even though this is similar to the 4th question but a
// object instead. I think the output will change because I think 
// it only stores the function and the obj's reference in the task
// queue. If the obj itself gets changed the output will be changed
// as well. 
