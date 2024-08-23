// what is the output in order? and explain why?

// 1
// output: a\nc\ne\nd\nb
// the log('e') inside promise is sync, so a, c, e will show as they are in the main codes.
// Then the microtask Promise.then's result d will show. Then the setTimeout b will show
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));

// 2
// output: 1\nstart\nsuccess
// the log(1) inside promise is sync, thus 1 will show firstly. Then 'start' afterward. 
// Then the microtask promise.then's 'success'
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
