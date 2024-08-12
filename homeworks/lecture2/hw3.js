// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
//0.30000000000000004
//There's a precision error when add two float number together because it's using binary to calculate. 

console.log(0.1 + 0.2 == 0.3);
//false
//0.3 is not exactly equal to 0.30000000000000004

console.log(1 + "2" + "2");
//122
//1 is coerced into string type, then all get concatenated. 

console.log(1 + +"2" + "2");
//32
//+"2" is coerced into number 2, 1+2 result in 3, then 3 is concatenated with string 2 after coerced into string '3'

console.log(1 + -"1" + "2");
//02
//-"1" is coerced into number 1, 1-1 result in 0. 

console.log(+"1" + "1" + "2");
//112
//+"1" first convert into number 1, but in 1 + "1", "1" is a string, so number 1 is coerced into a string, thus become "112"

console.log("A" - "B" + "2");
//NaN2
//"A" - "B" results in NaN, NaN is convert into a string and then concatenated with "2"

console.log("A" - "B" + 2);
//NaN
//NaN plus number 2 will result in NaN

console.log("0 || 1 = " + (0 || 1));
//0 || 1 = 1
//(0 || 1) returns 1, whole formula turns into "0 || 1 =" + 1, number will be converted to string so + 1 becomes "1" 

console.log("1 || 2 = " + (1 || 2));
//1 || 2 = 1
// (1 || 2) returns 1, +1 turns into string "1"

console.log("0 && 1 = " + (0 && 1));
//0 && 1 = 0
//(0 && 1) returns 0, +0 turns into string "0"

console.log("1 && 2 = " + (1 && 2));
//1 && 2 = 2
//(1 && 2) returns 2, +2 turns into string "2"

console.log(false == '0')
//true
//== only check for value equality, false got coerced into number 0, "0" turns into 0

console.log(false === '0')
//false
// === checks for value and type equality, type is not the same here