// What would be the output of following code?
// Explain your answer.
/**
 * 0.30000000000000004
false
122
32
02
112
NaN2
NaN
0 || 1 = 1
1 || 2 = 1
0 && 1 = 0
1 && 2 = 2
true
false
 */
console.log(0.1 + 0.2);
//number can't precisely represent the decimal fractions due to precision limitation
console.log(0.1 + 0.2 == 0.3);
//so the result won't be exactly 0,3
console.log(1 +  "2" + "2");
//number 1 coerced to string
console.log(1 +  +"2" + "2");
//+"2" makes string to number
console.log(1 +  -"1" + "2");
//-"1" makes string to number
console.log(+"1" +  "1" + "2");
//Though +"1" is number, result is string
console.log( "A" - "B" + "2");
//"A" and "B" cannot be valid numbers -> NaN
console.log( "A" - "B" + 2);
//NaN + number = NaN
console.log("0 || 1 = "+(0 || 1));
//|| return first ture value -> 1
console.log("1 || 2 = "+(1 || 2));
//|| return first ture value -> 1
console.log("0 && 1 = "+(0 && 1));
//&& return first false value -> 0
console.log("1 && 2 = "+(1 && 2));
//&& return last true value if both true -> 0
console.log(false == '0')
//'0' coercion to number 0 to boolean false
console.log(false === '0')
//strict equal does not allow type coercion
