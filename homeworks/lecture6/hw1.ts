// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id, //...u,
    type: "customer",
  };
}
//The returned object has the same properties as T but the TypeScript compiler doesn't recognize it as exactly T. 
//The type property is being explicitly overridden, which creates an issue if T contains more specific type information for the type property.

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return a + b;
  }
}
// function f(a: string | number, b: string | number) {
//   if (typeof a === typeof b) {
//     if (typeof a === "string") {
//       return `${a} : ${b}`;
//     } else {
//       return a + (b as number);
//     }
//   } else {
//     throw new Error("Parameters must be either both strings or both numbers.");
//   }
// }

