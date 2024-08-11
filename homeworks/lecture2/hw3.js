// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// output: 0.30000000000000004
// reason: In JavaScript, numbers are stored as double-precision floating-point values, which cannot precisely represent the decimal fractions like 0.1 and 0.2. When these values are added together, the result is different due to this precision limitation.

console.log(0.1 + 0.2 == 0.3);
// output: false
// reason: same as above-mentioned reason, the result of adding 0.1 and 0.2 is not exactly 0.3.

console.log(1 +  "2" + "2");
// output: 122
// reason: the number 1 is coerced into a string "1" while being added to another string "2", resulting in the string "12".
// Then, the string "12" is concatenated with another string "2", resulting in the string "122".

console.log(1 +  +"2" + "2");
// output: 32
// reason: +"2" converts the string "2" into a number 2. Then, the number 1 is added to 2, resulting in number 3. 
// Then, the number 3 is coerced into a string "3" when concatenated with another string "2", resulting in the string "32".

console.log(1 +  -"1" + "2");
// output: 02
// reason: -"1" converts the string "1" into a number -1. Then, the number 1 is added to -1, resulting in number 0. 
// Then, the number 0 is coerced into a string "0" when concatenated with another string "2", resulting in the string "02".

console.log(+"1" +  "1" + "2");
// output: 112
// reason: +"1" converts the string "1" into a number 1. Then, the number 1 is added to another string "1", resulting in the string "11". 
// Then, the string "11" is concatenated with another string "2", resulting in the string "112".

console.log( "A" - "B" + "2");
// output: NaN2
// reason: "A" and "B" cannot be subtracted as they are not valid numbers, resulting in a NaN. 
// Then, NaN is concatenated with another string "2", resulting in the string "NaN2".

console.log( "A" - "B" + 2);
// output: NaN
// reason: same as above-mentioned reason,
// "A" and "B" cannot be subtracted as they are not valid numbers, resulting in a NaN. 
// Then, NaN is added to number  2, resulting in NaN.

console.log("0 || 1 = "+(0 || 1));
// output: 0 || 1 = 1
// reason: || operator returns the first truthy value, so (0 || 1) returns 1.
// Then, "0 || 1 = " is concatenated with 1, resulting in the string "0 || 1 = 1".

console.log("1 || 2 = "+(1 || 2));
// output: 1 || 2 = 1
// reason: || operator returns the first truthy value, so (0 || 1) returns 1.
// Then, "0 || 1 = " is concatenated with 1, resulting in the string "0 || 1 = 1".

console.log("0 && 1 = "+(0 && 1));
// output: 0 && 1 = 0
// reason: && operator returns the first falsy value, so (0 && 1) returns 0.
// Then, "0 && 1 = " is concatenated with 0, resulting in the string "0 && 1 = 0".

console.log("1 && 2 = "+(1 && 2));
// output: 1 && 2 = 2
// reason: && operator returns the last truthy value if all values are true, so (1 && 2) returns 2.
// Then, "1 && 2 = " is concatenated with 2, resulting in the string "1 && 2 = 2".

console.log(false == '0')
// output: true
// reason: == allows type coercion, so '0' is converted to a number 0, then evalueated as false.

console.log(false === '0')
// output: false
// reason: === is strict equal and does not allow type coercion, so the comparison between a boolean and a string returns false.
