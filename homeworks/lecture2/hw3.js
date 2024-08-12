// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// Answer: 0.3
// Reason: print the addiction of 2 Numbers and the answer is 0.3
// Turns out the answer is 0.30000000000000004 because of the 
// floating point arithmetic.

console.log(0.1 + 0.2 == 0.3);
// Answer: False 
// Reason: Since we know 0.1 + 0.2 != 0.3 due to floating point 
// arithmetic from the frist question, the answer would be False.

console.log(1 +  "2" + "2");
// Answer: 122
// Reason: 1 would first be turned in to string of "1" from the type
// coercion then followed by string concatdination .

console.log(1 +  +"2" + "2");
// Answer: 32
// Reason: With out looking up I would think the addicational + sign
// will do somthing to make the String "2" become Number 2 then convert
// the addiction result of 3 into String followed by String concatdination.
// Turns out I was right

console.log(1 +  -"1" + "2");
// Answer: 02
// Reason: 1 minues 1 is 0 and then turn 0 into string followed by 
// String concatdination.

console.log(+"1" +  "1" + "2");
// Answer: 112
// Reason: I'm not sure if the + sign at the begining would do anything
// if the number is being added to a string 1 so that's just Sting concatdination.
// Turns out I was right. The String 1 is turned into Number 1 and turned back
// into String 1 again.

console.log( "A" - "B" + "2");
// Answer: somthing2
// Reason: I'm just guessing here since I don't know whats the 
// result for "A" - "B".

// True Answer: NaN2
// Turns out is NaN2. So "A" - "B" = Not A Number. I need to look into that.
// After a bit of searching, it seems when it come to A - B, JS will try to convert
// A and B into numbers. Since A and B are not numbers the result of A - B will
// be NaN then we do the String concatdination.

console.log( "A" - "B" + 2);
// Answer: NaN
// Reason: Before we have a String 2 add the end so we do String concatdination.
// Now we have Number 2 so we add up NaN with 2 it will stil be NaN.

console.log("0 || 1 = "+(0 || 1));
// Answer: 0 || 1 = 0 || 1?
// Reason: I'm not sure about this. Is it just String concatdination?

// True Answer: 0 || 1 = 1
// Turns out that we have to do the Logical OR Operation in the parentheses first
// before the final String concatdinaiton. Since 0 is false and 1 is ture it would
// return 1. so we have "0 || 1 = " + 1.

console.log("1 || 2 = "+(1 || 2));
// Answer: 1 || 2 = 1
// Reason: Since anything other than 0 is true, 1 and 2 both are true and we know
// JS have lazy exctuction it would returned the frist true statment for the OR
// Operater. So we have "1 || 2 = " + 1

console.log("0 && 1 = "+(0 && 1));
// Answer: 0 && 1 = 0
// Reason: 0 is false and 1 is true. We have an AND Operater so it would returned
// 0 after it saw the 0 and && with out looking at the 1. So we have "0 && 1 = " + 0

console.log("1 && 2 = "+(1 && 2));
// Answer: 1 && 2 = 2
// Reason: 1 and 2 are both true but since we have a AND Operater it would no for
// sure is true with out looking at the 2. So it will return 2 instead. Now we
// have "1 && 2 = " + 2

console.log(false == '0')
// Answer: True
// Reason: I would assume that since we are comparing boolean with somthing, 
// it would be logical to convert the '0' to a Boolean and '0' is false. So
// the result would be true.

console.log(false === '0')
// Answer: false
// Reason: For "===" we first compare their type. false is Boolean and '0' is
// String. Because the type is different the result will be false.