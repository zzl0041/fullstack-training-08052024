// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    ...u, // copy all properties from u
    type: "customer", // override
  };
}
// Explanation: The original code returns an object that only includes the id and type properties, and possibly missing other properties required by the type T.

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a !== typeof b) {
    throw new Error("The function should accept either two strings or two numbers at the same time");
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  }
}
// console.log(f("hello", "world"));
// console.log(f(1, 2));
// console.log(f("hello", 2)); 
