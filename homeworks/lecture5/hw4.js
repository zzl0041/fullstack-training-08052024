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

/**
 * output:
 * 1
 * 2
 *
 * reason:
 * 'Promise.resolve(1)' creates a resolved promise with value 1
 * The first '.then()' is executed, logging 1 and return 2
 * The '.catch()' is skipped since the promise is resolved
 * The second '.then()' receives 2 and logs 2.
 */

// // 2
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

/**
 * output:
 * 1
 * 3
 *
 * reason:
 * 'Promise.reject(1)' creates a rejected promise with value 1
 * The '.catch()' is triggered and logs the value 1 and return 3
 * The error is handled in '.catch()', so promise chain continues, the second '.then()' receives 3 and logs 3.
 */

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
/**
 * output:
 * Error: 2
 *
 * reason:
 * 'Promise.all' runs all the promises concurrently and it resolves only when all the promises are fulfilled.
 * 'runReject(2)' rejects first after 2 seconds with the error message 'Error: 2'
 * 'Promise.all' rejects as soon as the first rejection occurs, and the '.catch()' is triggered and logs the error message.
 */
