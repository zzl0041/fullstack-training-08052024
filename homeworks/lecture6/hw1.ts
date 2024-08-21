// 1. why there would be error in the following code? and how to fix it?

import { rejects } from "assert";

// the return type is not guaranteed to be T
type User = {
  id: number;
  type: string;
};

// function makeCustomer<T extends User>(u: T): T {
//   return {
//     id: u.id,
//     type: "customer",
//   };
// }

// the spread of u guarantees the return type is T because the input is T, then override type value
function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    type: "customer",
  };
}



// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
// function f(a: string | number, b: string | number) {
//   if (typeof a === "string") {
//     return `${a} : ${b}`;
//   } else {
//     return a + b;
//   }
// }

// add return type and type guard
function f(a: string, b: string): string;
function f(a: number, b: number): number;
function f(a: string | number, b: string | number): string | number | null {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } 
  else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  else {
    return null;
  }
}

console.log(f("a", 1)); // error
