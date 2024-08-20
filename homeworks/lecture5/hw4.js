// what is the output? and explain why?

// 1
// 1 2
// the first .then get the argument from resolve(1), and the second .then get the argument from return 2
Promise.resolve(1)
  .then((res) => {
    console.log(res)
    return 2
  })
  .catch((err) => {
    return 3
  })
  .then((res) => {
    console.log(res)
  })

// 2
// 1 3
// the .catch get the argument from reject(1), and the second .then get the argument from return 3
Promise.reject(1)
  .then((res) => {
    console.log(res)
    return 2
  })
  .catch((err) => {
    console.log(err)
    return 3
  })
  .then((res) => {
    console.log(res)
  })

//3
// Error: 2
// any reject of these promises will cause reject immediately, which in this case is runReject(2) after 2 sec
function runAsync(x) {
  const p = new Promise((resolve) => setTimeout(() => resolve(x), 1000))
  return p
}

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  )
  return p
}

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
