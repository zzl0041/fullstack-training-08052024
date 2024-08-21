// what is the output in order? and explain why?

// 1
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));

//output: a
//        c
//        e
//        d
//        b
//reason: JS go through the code first print 'a', then put
//console.log() function inside setTimeout into tasks queue
// followed by printing out 'c', then put promise into task 
// queue. Because promise is a Micro task and have higher 
// priority, therefore it get exetcuted first resulting 
// printing out 'e'. Next the the promise is resloved and 'd'
// gets returned and printed. Finally 'b' printed from the 
// setTimeout(). 

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');

//output: 1
//        start
//        sucess
//reason: After fn is intitalized, it gets called immediately,
// before resolving the promise, '1' gets printed. Then what
// ever is in the .then() is put into the tasks queue. 'start'
// is printed next. After the the callstak is empty we put
// the function inside .then() into the callstak and 'success'
// will be printed