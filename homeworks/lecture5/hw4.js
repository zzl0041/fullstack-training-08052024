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

//output: 1
//        2
//reason: promise is solved with result 1 and returned 2.
// Next 1 is printed as the first resolve result.
// there is no reject to be catched. The second callback
// with use the result from the first callback with is 2.
// Therefor 2 will be printed next.

// 2
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

//output: 1
//        3
//reason: With reject(1), the .catch() will catch that reject
// and print 1. 3 was returned as the result of the .catch().
// .then() will use that result and print 3.

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

//output: Error 2
//reason: Since we have Promise.all(), that means if one of the 
// promise fail we do ignor the rest and go stright to catch.
// So we can only look at what will fail first. Since all of promises
// will run at the same time, the runReject() with the shortest timeout
// will fail first. So runReject(2) will be catched. The console.log will
// be 'Error 2'.
