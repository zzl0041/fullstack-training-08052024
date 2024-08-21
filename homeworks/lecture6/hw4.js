/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let str = num.toString()
  let [intPart, decimalPart] = str.split('.')

  let ans = ''
  let count = 0

  for (let i = intPart.length - 1; i >= 0; i--) {
    ans = intPart[i] + ans
    count++

    if (count % 3 === 0) {
      ans = ',' + ans
    }
  }

  if (decimalPart) {
    ans += '.' + decimalPart
  }

  return ans
}
