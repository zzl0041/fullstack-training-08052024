// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

// 1
// 2

// Promise.resolve(1) creates a resolved promise with the value 1.
// First .then() is executed because the promise is resolved. It logs 1 and returns 2.
// Second .then() receives the value 2 and logs 2.
// Catch() block is not executed because there is no error.

// 2
Promise.reject(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    console.log(err);
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

// 1
// 3

// Promise.reject(1) creates a rejected promise with the value 1.
// Catch() block is executed because the promise is rejected. It logs 1 and returns 3.
// Second .then() receives the value 3 from the .catch() and logs 3.
// First .then() is skipped because the promise is rejected.

//3
function runAsync(x) {
  const p = new Promise((resolve) => setTimeout(() => resolve(x), 1000));
  return p;
}

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Error: 2
// Promise.all() waits for all promises to either resolve or for any of them to reject.
// RunAsync(1) and runAsync(3) promises will resolve after 1 and 3 seconds, respectively.
// RunReject(2) promise will reject after 2 seconds with the value "Error: 2".
// RunReject(4) promise would reject after 4 seconds, but it won't because the first rejection (from runReject(2)) causes Promise.all() to immediately reject with "Error: 2".
// Catch() block is executed, logging "Error: 2". The .then() block is not executed because the Promise.all() rejected.
