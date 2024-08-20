// what is the output in order? and explain why?

// 1
// a c e d b
// log a -> console.log('b') added into task queue -> log c -> callback of .then added into job queue with higher priority -> log e -> log d -> log b
console.log('a')
setTimeout(() => console.log('b'), 0)
console.log('c')
new Promise((resolve, reject) => {
  resolve('d')
  console.log('e')
  reject('f')
}).then((result) => console.log(result))

// 2
// 1 start success
// run console.log(1) in fn(), add callback of .then into job queue -> console.log('start') -> console.log('success')
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1)
    resolve('success')
  })

fn().then((res) => {
  console.log(res)
})

console.log('start')
