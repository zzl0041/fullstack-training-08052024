// 1. why there would be error in the following code? and how to fix it?
// potentially missing other properties that T might have
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

function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    type: 'customer' as T['type'],
  } as T
}


// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string"  && typeof b === "string") {
    return `${a} : ${b}`
  } else if (typeof a === "number"  && typeof b === "number"){
    return a + b
  } else{
    throw new Error("Both parameters must be of the same type.")
  }
}
