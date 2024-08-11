// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// In JavaScript, it uses the IEEE 754 standard for representing floating-point numbers. This standard uses a binary format to represent numbers, and some decimal fractions like 0.1 and 0.2 cannot be precisely represented in binary. Instead, they are stored as approximations, and when added together, the result is also an approximation, slightly larger than the expected value of 0.3.

console.log(0.1 + 0.2 == 0.3);
// false
// Same reason as the previous one. The result of adding 0.1 and 0.2 in JavaScript is actually 0.30000000000000004, not exactly 0.3.

console.log(1 + "2" + "2");
// 122
// Type Coercion. JavaScript automatically converts numbers to strings when adding a number to a string. It is actually doing string concatenations.

console.log(1 + +"2" + "2");
// 32
// +"2" converts the string "2" into the number 2, so it becomes 1 + 2 + "2", which is 3 + "2". Then with type coercion, it converts the number 3 to a string, resulting in "3" + "2". The final result of string concatenation is "32".

console.log(1 + -"1" + "2");
// 02
// -"1" converts the string "1" into the number -1, so it becomes 1 - 1 + "2", which is 0 + "2". Then with type coercion, it converts the number 0 to a string, resulting in "0" + "2". The final result of string concatenation is "02".

console.log(+"1" + "1" + "2");
// 112
// +"1" converts the string "1" into the number 1, so it becomes 1 + "1" + "2". Then with type coercion, it converts the number 1 to a string, resulting in "1" + "1" + "2". The final result of string concatenation is "112".

console.log("A" - "B" + "2");
// NaN2
// JavaScript cannot perform substraction for strings, so "A" - "B" results in NaN. Then with string concatenation, the final result is "NaN2".

console.log("A" - "B" + 2);
// NaN
// JavaScript cannot perform substraction for strings, so "A" - "B" results in NaN. Adding a number to NaN is still NaN.

console.log("0 || 1 = " + (0 || 1));
// 0 || 1 = 1
// In exp1 || exp2, it returns exp1 if it can be converted to true; otherwise, returns exp2.
// In 0 || 1, 0 is false, so it returns 1.

console.log("1 || 2 = " + (1 || 2));
// 1 || 2 = 1
// In exp1 || exp2, it returns exp1 if it can be converted to true; otherwise, returns exp2.
// In 1 || 2, 1 is true, so it returns 1.

console.log("0 && 1 = " + (0 && 1));
// 0 && 1 = 0
// In exp1 && exp2, it returns exp1 if it can be converted to false; otherwise, returns exp2.
// In 0 && 1, 0 is false, so it returns 0.

console.log("1 && 2 = " + (1 && 2));
// 1 && 2 = 2
// In exp1 && exp2, it returns exp1 if it can be converted to false; otherwise, returns exp2.
// In 1 && 2, 1 is true, so it returns 2.

console.log(false == "0");
// true
// Non strict equal. With type coercion, it converts the operands to the same type before making the comparison.
// false is coerced to number 0, and "0" is also coerced to number 0. 0 == 0 is true.

console.log(false === "0");
// false
// Strict equal. It requires both operands to be of the same type and value to return true.
// false is boolean and "0" is string, so return false.
