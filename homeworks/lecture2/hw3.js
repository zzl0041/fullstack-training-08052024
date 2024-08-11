// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); // output: 0.30000000000000004.
// Since the limitation of floating-point arithmetic in binary representation.
// Basically 0.1 cannot be represented exactly in binary, therefore, 0.1 + 0.2 cannot result into a precise value and result into a approximately value 0.30000000000000004

console.log(0.1 + 0.2 == 0.3); // output: false.
// Since 0.1 + 0.2 = 0.30000000000000004

console.log(1 + "2" + "2"); // output: string 122.
// 1 does coercion and converted into string '1' since it plus to a string. The + concatenate 3 strings and result in 122

console.log(1 + +"2" + "2"); // output: 32.
// The first string 2 does coercion since there is a '+' sign in front of it. 1 + 2 = 3. 3 does coercion and converted into string '3' since it plus to a string. The + concatenate 3 and 2 and results in 32.

console.log(1 + -"1" + "2"); // output: 02.
// The first string '1' does coercion and converted into a number 1 since there is a '-' sign in front of it. 1 - 1 = 0. 0 does coercion and converted into string '0'. The '+' concatenate 0 and 2. The final result is string 02.

console.log(+"1" + "1" + "2"); // output: 112.
// The first string '1' does coercion and converted into number 1 since the '+' in front of it. However, the number 1 does coercion when a number is added to a string. It then performs concatenation and resulted in 112.

console.log("A" - "B" + "2"); // output: NaN2
// - performs arithmetic operation. But string A, B are not number. It results NaN. It later does coercion to a string since it + with a string. The + does concatenation. The final result is NaN2.

console.log("A" - "B" + 2); // output: NaN
// - performs arithmetic operation. But string A, B are not number. It results NaN. The + also does arithmetic operation since the following data type is a number. However, the left side data is NaN. It results NaN

console.log("0 || 1 = " + (0 || 1)); // output: 0 || 1 = 1
// 0 || 1 results 1.
// Since left part of + sign is string, right part number 1 does coercion and converted into string 1. + concatenate two parts of string. The output is 0 || 1 = 1.

console.log("1 || 2 = " + (1 || 2)); // 1 || 2 = 1
// 1 || 2 results 1.
// Since left part of + sign is string, right part number 1 does coercion and converted into string 1. + concatenate two parts of string. The output is 1 || 2 = = 1.

console.log("0 && 1 = " + (0 && 1)); // output: 0 && 1 = 0
// 0 && 1 results 0
// Since left part of + sign is string, right part number 1 does coercion and converted into string 1. + concatenate two parts of string. The output is 0 && 1 = 0.

console.log("1 && 2 = " + (1 && 2)); // output: 1 && 2 = 1
// 1 && 2 results 1
// Since left part of + sign is string, right part number 1 does coercion and converted into string 1. + concatenate two parts of string. The output is 1 && 2 = 1.

console.log(false == "0"); // output: true
// == does coercion. false and '0' both converted to number 0. The output is true

console.log(false === "0"); // output: false
// === doesn't do coercion but strict comparison. The output is true since they are different data types.
