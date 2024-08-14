// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// Because the numbers are stored in binary, which can lead to precision errors when performing arithmetic on them.

console.log(0.1 + 0.2 == 0.3);
// false
// As seen earlier, 0.1 + 0.2 results in 0.30000000000000004, which is not exactly equal to 0.3.

console.log(1 +  "2" + "2");
// 122
// JavaScript evaluates expressions from left to right. Here, 1 + "2" is a string concatenation, resulting in "12". Then, "12" + "2" results in "122".

console.log(1 +  +"2" + "2");
// 32
// The unary + before "2" converts the string "2" into the number 2. So, 1 + 2 results in 3, and then 3 + "2" is string concatenation, resulting in "32".

console.log(1 +  -"1" + "2");
// 02
// The unary - before "1" converts the string "1" into the number -1. So, 1 - 1 results in 0, and then 0 + "2" is string concatenation, resulting in "02".

console.log(+"1" +  "1" + "2");
// 112
// The unary + converts the string "1" to the number 1. So, 1 + "1" results in "11", and then "11" + "2" results in "112".

console.log( "A" - "B" + "2");
// NaN2
// Subtracting strings "A" and "B" results in NaN (Not-a-Number) because subtraction between non-numeric strings is undefined in JavaScript. Then, NaN + "2" is string concatenation, resulting in "NaN2".

console.log( "A" - "B" + 2);
// NaN
// As before, "A" - "B" results in NaN. Adding 2 to NaN results in NaN since any arithmetic operation with NaN results in NaN.

console.log("0 || 1 = "+(0 || 1));
// 0 || 1 = 1
//  The || operator returns the first truthy value it encounters. Since 0 is falsy, the result of 0 || 1 is 1.

console.log("1 || 2 = "+(1 || 2));
// 1 || 2 = 1
// Here, 1 is truthy, so the || operator returns 1 without evaluating the second operand.

console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0
// The && operator returns the first falsy value it encounters. Since 0 is falsy, 0 && 1 results in 0.

console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2
// The && operator returns the second operand if both operands are truthy. Here, 1 && 2 results in 2 because both 1 and 2 are truthy.

console.log(false == '0')
// true
// The == operator performs type coercion. In this case, '0' is coerced to 0, and false is coerced to 0 as well. Since 0 == 0, the comparison returns true.

console.log(false === '0')
// false
// The === operator checks for both value and type equality without type coercion. Since false is a boolean and '0' is a string, they are not equal, so the comparison returns false.
