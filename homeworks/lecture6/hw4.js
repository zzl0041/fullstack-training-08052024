/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let [intArr, DecArr] = num.toString().split('.');
  let reverseIntArr = intArr.split('').reverse();
  let reversedIntResult = reverseIntArr.reduce((acc, current, index) => {
    acc.push(current);
    if ((index + 1) % 3 === 0) {
      acc.push(',');
    }
    return acc;
  }, [])
  const intResult = reversedIntResult.reverse().join('');
  return DecArr ? `${intResult}.${DecArr}` : intResult;
}


console.log(format(12345678));
console.log(format(1234.56)); 