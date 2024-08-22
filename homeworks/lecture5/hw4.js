// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });
/* 1 2
Create a resolved promise with 1
The first .then block will output res(1 for now), then return a new resolved promise with 2
The last .then block will receive 2 and output it.
*/

// // 2
Promise.reject(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    console.log(err);
    return 3;
  })
  .then(res => {
    console.log(res);
  });
/*
Create a rejected promise with 1. 
Skip the first .then block since the promise is rejected.
.catch block receives the promise, and outputs 1, then returns a new promise with 3
The last .then block receives promise with value 3 and output it.
*/

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

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res))
  .catch(err => console.log(err));
/* Error: 2
runAsync(1) and runAsync(3) create promises resolved with 1 and 3
runReject(2) and runReject(4) create promises rejected with 2 and 4
Promise.all() waits for all promises to resolve, if any rejected, it will rejects. 
runReject(2) reject first, after 2 seconds, so Promise.all() will reject with 2
*/