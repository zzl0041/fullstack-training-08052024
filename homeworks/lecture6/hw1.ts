// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  };
}
/* Didn't return all properties of u, only have id and type
update line "id: u.id, " to "...u,"
It will cover all properties from u.
*/

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a !== typeof b) {
    throw new Error("Parameters type not the same");
  }
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return a + b;
  }
}
