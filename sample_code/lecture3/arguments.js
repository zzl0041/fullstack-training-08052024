/**
 * function arguments
 */
// function foo(a, b, c) {
//   console.log(a, b, c);
//   console.log(arguments);
//   console.log(arguments.length);
// }
// foo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function bar(a, b, c) {
  console.log(a, b, c);
  console.log(arguments);
}
bar(1);

// function rest(a, b, ...args) {
//   console.log(args);
// }
// rest(1, 2, 3, 4, 5);

function defaultArgs(a = 1, b = 2, c, d, e, f) {
  console.log('a =', a, 'b =', b);
}
defaultArgs(3, 4, 5, 6);
defaultArgs(3);
defaultArgs();

function test(a, b, options = {}) {
  console.log(user.id, user.name);
}

test(1, 2, { id: 1, name: 'aaron', location: '1234 Ave' });
test(1, 2, { name: 'aaron', id: '2' });
test();
