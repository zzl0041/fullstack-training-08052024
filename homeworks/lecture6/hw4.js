/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  const numStr = num.toString();
  const [integerPart, decimalPart] = numStr.split('.');

  const integerArray = integerPart.split('');
  const result = [];

  let count = 0;
  for (let i = integerArray.length - 1; i >= 0; i--) {
    result.unshift(integerArray[i]);
    count++;
    if (count === 3 && i !== 0) {
      result.unshift(',');
      count = 0;
    }
  }

  const formattedInteger = result.join('');

  if (decimalPart) {
    return `${formattedInteger}.${decimalPart}`;
  } else {
    return formattedInteger;
  }
}

// Example usage:
console.log(format(12345678));    // Output: "12,345,678"
console.log(format(1234.56));     // Output: "1,234.56"
console.log(format(1234567.89));  // Output: "1,234,567.89"
console.log(format(123456789));   // Output: "123,456,789"