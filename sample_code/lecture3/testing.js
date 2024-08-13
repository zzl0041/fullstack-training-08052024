// functions
// Function to greet a person
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Function that takes another function as an argument
function greetUser(greetingFunction, name) {
  greetingFunction(name);
}

// Assigning the greet function to a variable
var sayHello = greet;

// Using the sayHello variable as a function
sayHello("John");

// Passing the greet function as an argument to greetUser
greetUser(greet, "Alice");

// parameters
function foo(a, b, c) {
  console.log(a, b, c);
  console.log(arguments);
  console.log(arguments.length);
}
foo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function bar(a, b, c) {
  console.log(a, b, c);
  console.log(arguments);
}
bar(1);

// Passing by value
function incrementValue(value) {
  value++;
  return value;
  //   console.log(value);
}

let num = 5;
// console.log(incrementValue(num));
// console.log(num); // Output: 5

function Tree(name) {
  this.name = name;
}

const theTree = new Tree("Redwood");
console.log(`theTree.constructor is ${theTree.constructor}`);
