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
  // 1
  // 2
  // The first then block is executed because the promise is resolved, so console.log(res) prints 1.
  // The then block returns 2, which is passed to the next then. 

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
  // 1
  // 3
  // Promise.reject(1) creates a rejected promise with the value 1.
  // The catch block is executed because the promise was rejected, so console.log(err) prints 1.
  

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
//  Error: 2
// Since runReject(2) rejects first (after 2 seconds), the catch block is executed, and console.log(err) prints "Error: 2".
// When any promise in Promise.all rejects, the entire Promise.all is rejected, and the then block is skipped.