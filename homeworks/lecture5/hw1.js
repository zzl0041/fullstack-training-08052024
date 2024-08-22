// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/**
 * output: (after around 1 ms)
 * 5
 * 5
 * 5
 * 5
 * 5
 *
 * reason:
 * The 'var' keyword is function scope, so the same i is shared across all iterations of the loop.
 * When the 'setTimeout' callbacks execute after 1000 ms, the loop has already completed and i has been incremented to 5.
 * So, each callback logs the final value of i, which is 5.
 */

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/**
 * output: (after around 1 ms)
 * 0
 * 1
 * 2
 * 3
 * 4
 *
 * reason:
 * The 'let' keyword is block scope, so a new i is created in each iteration.
 * Each 'setTimeout' callback captures the value of i specific to its iteration.
 */

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
/**
 * output: (after around 1 ms)
 * 0
 * 1
 * 2
 * 3
 * 4
 *
 * reason:
 * The IIFE creates a new function scope for each iteration, so it captures the current value of i in each iteration.
 */

// 4
let fn = () => {
  console.log("I am fn");
};
setTimeout(fn, 1000);
fn = () => {
  console.log("I am another fn");
};
/**
 * output: (after around 1 ms)
 * I am fn
 *
 * reason:
 * When 'setTimeout' is executed, it captures the reference of 'fn' as it was at that moment.
 * Even though 'fn' is reassigned, when the timer expires it still uses the original reference.
 */

// 5
let obj = {
  name: "obj",
};
setTimeout(() => console.log(obj), 1000);
obj.name = "another obj";
/**
 * output: (after around 1 ms)
 * { name: 'another obj' }
 *
 * reason:
 * When 'setTimeout' is executed, it captures the reference of the 'obj' object.
 * The 'name' property of 'obj' has been modified before the timer expires, so the updated value of 'obj' is logged.
 */
