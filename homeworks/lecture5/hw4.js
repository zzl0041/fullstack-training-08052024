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
// output:  1 2
// 1 is logged by the first .then since the promise is resolved.
// 3 will never be printed out since the it is resolved promise.
// 2 prints out next since the first .then() returns 2.

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
// output: 1 3
// The first .then() will never be print out since it is reject promise.
// Then .catch() is executed and 1 is printed out. 3 is printed out next since a 3 is returned in the .catch() and .then() is following.

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

// output: Error: 2
// The return is error since Promise.all() only returns a fulfill promise when all the input promises are resolved, and there two reject promises in this input.
// runReject(2) is returned it takes shortest time to generate the rejected result.
