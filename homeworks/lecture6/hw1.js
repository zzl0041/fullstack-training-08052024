// 1. why there would be error in the following code? and how to fix it?
// type User = {
//   id: number;
//   type: string;
// };
// function makeCustomer<T extends User>(u: T): T {
//   return {
//     ...u,
//     type: "customer",
//   };
// }
// the returned object does not satisfy the type T, which causes a TypeScript error
// useing ... to ensure all properties of u are included in the returned object. 
// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a, b) {
    if (typeof a !== typeof b) {
        throw new Error("must be same type");
    }
    if (typeof a === "string" && typeof b === "string") {
        return "".concat(a, " : ").concat(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        throw new Error("Invalid input types");
    }
}
// Test cases
console.log(f("a", "b")); // Output: "a : b"
console.log(f(1, 2)); // Output: 3
console.log(f("a", 1)); // Throws Error: "Both parameters must be of the same type"
