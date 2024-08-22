// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/* 
5
5
5
5
5 
var is function-scoped, thus i will shared across all iteration. 
By the time setTimeout is executed after 1000 ms, the loop has finished, 
so i has already been 5. All the print out will be 5. 
*/

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/* 
0
1
2
3
4
let is block-scoped, each iteration have their own i. 
When setTimeout is executed, it uses i from each iteration. The print out will be 0 to 4
 */

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
/* 
0
1
2
3
4
The IIFE function will capture i in each iteration, 
so the print out would be every i that passed to the IIFE funtion. 
*/

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
/* 
I am another fn
When setTimeout is executed, 
the other part in the main function already has finished execution, 
which means fn has been resignned to another funtion.   
*/

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
/*
another obj
When setTimeout is executed, 
the other part in the main function already has finished execution, 
which means obj.name has been updated to another obj.
*/