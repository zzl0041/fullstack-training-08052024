// 1. why there would be error in the following code? and how to fix it?
// type User = {
//   id: number;
//   type: string;
// };

// function makeCustomer<T extends User>(u: T): T {
//   return {
//     id: u.id,
//     type: "customer",
//   };
// }

// The object will return with the type "T". But "T" could have more properties than "id" and "type".
// fixed version
type User = {
  id: number;
  type: string;
};

type Customer = Omit<User, "type"> & { type: "customer" };

function makeCustomer<T extends Omit<User, "type">>(u: T): Customer {
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

// fixed version
function f(a: string | number, b: string | number) {
  if (typeof a !== typeof b) {
    throw new Error("Parameters must be of the same type");
  }

  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  }

  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
}
