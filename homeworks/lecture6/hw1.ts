// 1. why there would be error in the following code? and how to fix it?
type User1 = {
  id: number;
  type: string;
};

// ------ original code ------
// function makeCustomer<T extends User>(u: T): T {
//   return {
//     id: u.id,
//     type: "customer",
//   };
// }

// ------ fixed code ------
function makeCustomer<T extends User1>(u: T): T {
  return {
    ...u,
    type: "customer",
  };
}

// The error occurs because Typescript expects an return object is a subtype of User, however, it returns an object which is exactly a User object.
// to fix this error, we can use spread operator to copy all properties of the input object and then overwrite the type properties.


// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error

// ------ original code ------
// function f(a: string | number, b: string | number) {
//   if (typeof a === "string") {
//     return `${a} : ${b}`;
//   } else {
//     return a + b;
//   }
// }

// ------ fixed code ------
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("Types don't match.")
  }
}