// What would be the output of following code?
// Explain your answer.

// a float number near to 0.3. 0.30000000000000004 when testing.
// Because 10^(-1) and 5^(-1) are not divisible by 2^(-1), 
// their binary representation has infinity digits.
// Thus the sum has additional precision lost.
console.log(0.1 + 0.2); 

// false.
// Because 0.30000000000000004 is not equal to 0.3.
console.log(0.1 + 0.2 == 0.3);

// "122".
// Coercion rule: bool => number => string (prioritized type)
// 1 +  "2" is coerced to "12"
console.log(1 +  "2" + "2");

// "32"
// `+` is unary operator to convert "2" to 2
console.log(1 +  +"2" + "2");

// "02"
// `-` is unary operator to convert "1" to -1
console.log(1 +  -"1" + "2");

// "112"
// coercion happend to 1 + "1"
console.log(+"1" +  "1" + "2");

// "NaN2"
// "A" - "B" is NaN, then coerced to string
console.log( "A" - "B" + "2");

// NaN
// NaN plus any number is NaN
console.log( "A" - "B" + 2);

// "0 || 1 = 1"
// `||` return the first true value. If no true, return last false. 
// 0 is false, thus always return the value after `||`
console.log("0 || 1 = "+(0 || 1));

// "1 || 2 = 1"
// 1 is true.
console.log("1 || 2 = "+(1 || 2));

// "0 && 1 = 0"
// `&&` return the first false value. If no false, return the last true.
// 0 is false.
console.log("0 && 1 = "+(0 && 1));

// "1 && 2 = 2"
// both value are true.
console.log("1 && 2 = "+(1 && 2));

// true
// `==` will try to convert type first. bool => number <= string
// false is converted to 0, '0' is converted to 0
console.log(false == '0')

// false
// `===` will check type first.
console.log(false === '0')
