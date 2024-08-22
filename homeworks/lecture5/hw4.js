// what is the output? and explain why?

// 1
// Promise.resolve(1)
//   .then(res => {
//     console.log(res); // 1
//     return 2;
//   })
//   .catch(err => {
//     return 3;
//   })
//   .then(res => {
//     console.log(res); // 2
//   });
// 1 : Promise.resolve(1) immediately resolves with the value 1
// 2 Second .then block receives 2 and logs it


// 2
// Promise.reject(1)
//   .then(res => {
//     console.log(res);
//     return 2;
//   })
//   .catch(err => {
//     console.log(err); // 1
//     return 3;
//   })
//   .then(res => {
//     console.log(res); // 3
//   });

// 1 : immediately rejects with the value 1.
// .then block is skipped because the promise is rejected 
// and .catch block receives the rejected value 1 and logs it (console.log(1);).
// 3 :  .catch block returns 3, which is passed to the next .then block. 
// and final .then block receives 3 and logs it

//3
function runAsync(x) {
  const p = new Promise(resolve =>
    setTimeout(() => resolve(x), 1000)
  );
  return p;
}

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}

// Promise.all waits for all the promises in the array to settle (either resolve or reject).
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res))
  .catch(err => console.log(err));

  // runAsync(1) resolves after 1 second
  // runReject(4) rejects after 4 seconds
  // runAsync(3) resolves after 1 second
  // runReject(2) rejects after 2 seconds

  // Since Promise.all short-circuits on the first rejection, the .catch block is executed with the error "Error: 2" and logs it