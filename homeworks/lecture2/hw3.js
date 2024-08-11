// What would be the output of following code?
// Explain your answer.

//0.30000000000000004, because the numbers 0.1 and 0.2 do not have exact representations in binary
console.log(0.1 + 0.2)

//flase, because 0.30000000000000004 != 0.3
console.log(0.1 + 0.2 == 0.3)

//122, + converts 1 to a string and then performs string concatenation
console.log(1 + '2' + '2')

//32, +'2' converts the string '2' to the number 2
console.log(1 + +'2' + '2')

//02, -'1' converts the string '1' to the number -1
console.log(1 + -'1' + '2')

//112, +'1' converts the string '1' to the number 1, and then performs string concatenation
console.log(+'1' + '1' + '2')

//NaN2, subtracting two non-numeric strings results in NaN, and then performs string concatenation
console.log('A' - 'B' + '2')

//NaN, NaN plus any number is still NaN
console.log('A' - 'B' + 2)

//0 || 1 = 1, || returns the first truthy value or the last value - 1, and then performs string concatenation
console.log('0 || 1 = ' + (0 || 1))

//1 || 2 = 1, || returns the first truthy value - 1 or the last value, and then performs string concatenation
console.log('1 || 2 = ' + (1 || 2))

//0 && 1 = 0, && returns the first falsy value - 0 or the last value, and then performs string concatenation
console.log('0 && 1 = ' + (0 && 1))

//1 && 2 = 2, && returns the first falsy value or the last value - 2, and then performs string concatenation
console.log('1 && 2 = ' + (1 && 2))

//true, the == performs type coercion and convert both sides to number 0
console.log(false == '0')

//false, the left side is boolean, the right side is string, they are not same in type
console.log(false === '0')
