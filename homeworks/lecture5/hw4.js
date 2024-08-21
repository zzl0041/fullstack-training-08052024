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
// output: 1 2
// reason: Promise.resolve(1) creates a promise that is resolved with 1. then the first then is excuted immediately, so console.log(res) will print 1. then return 2, which is the input of the second then. so console.log(res) will print 2.
// catch is not excuted because there is no error.

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
// output: 1 3
// reason: Promise.reject(1) creates a promise that is rejected with 1. then the catch is excuted immediately, so console.log(err) will print 1. then return 3, which is the input of the second then. so console.log(res) will print 3.

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
// output: Error: 2
// reason: Promise.all waits for all promises to be reolved or rejected. The first promise to be rejected is runReject(2)(not 4 since 2*1000 < 4*1000 in setTimeout), so the catch is excuted immediately, so console.log(err) will print 'Error: 2'. The other promises are not excuted because the first promise is rejected.