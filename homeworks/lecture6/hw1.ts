// 1. why there would be error in the following code? and how to fix it?
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

// 'T' could have additional properties beyong 'id' and 'type', but the returned object only inlcudes 'id' and 'type', which might be incompatible with 'T'.
// fixed code
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

// fixed code
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("The parameters should be both strings or both numbers");
  }
}
