// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004; try it in my console
// floating-point numbers are reprsented in binary, so the result is not an exact 0.3

console.log(0.1 + 0.2 == 0.3);
// false
// not an exact 0.3

console.log(1 + "2" + "2");
// 122
// convert 1 into string"1", then add "2", add "2"

console.log(1 + +"2" + "2");
// 32
// first convert +"2" into number2, then 1+2=3, then convert 3 into string"3" and add "2"

console.log(1 + -"1" + "2");
// 02
// first convert -"1" into -1, then 1-1=0, then convert 0 into string "0" and add "2"

console.log(+"1" + "1" + "2");
// 112
// first convert +"1" into number1, then into string "1", then add "1" add "2"

console.log("A" - "B" + "2");
// NaN2
// "A" and "B" cannot be converted into numbers and been operated, so the result of "A" - "B" should be NaN
// string"NaN" add string "2"

console.log("A" - "B" + 2);
// NaN
// When NaN is added to a number2, the result is still "NaN"

console.log("0 || 1 = " + (0 || 1));
// 0 || 1 = 1
// the result of opereation 0||1 is 1
// add string "0 || 1 = " and string "1"

console.log("1 || 2 = " + (1 || 2));
// 1 || 2 = 1
// the result of opereation 1||2 is 1
// add string "1 || 2 = " and string "1"

console.log("0 && 1 = " + (0 && 1));
// 0 && 1 = 0
// the result of opereation 0&&1 is 0
// add string "0 && 1 = " and string "0"

console.log("1 && 2 = " + (1 && 2));
// 1 && 2 = 1
// the result of opereation 1&&2 is 1
// add string "1 && 2 = " and string "1"

console.log(false == "0");
// true
// false and "0" both are converted to number 0, their values are the same

console.log(false === "0");
// false
// the type of false is boolean, the type of "0" is string
