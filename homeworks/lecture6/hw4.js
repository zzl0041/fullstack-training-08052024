/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let [integerPart, decimalPart] = num.toString().split(".");
  let result = "";
  let count = 0;

  for (let i = integerPart.length - 1; i >= 0; i--) {
    result = integerPart[i] + result;
    count++;
    if (count % 3 === 0 && i > 0) {
      result = "," + result;
    }
  }

  if (decimalPart) {
    result += "." + decimalPart;
  }

  return result;
}

console.log(format(12345678));
console.log(format(1234.56));
