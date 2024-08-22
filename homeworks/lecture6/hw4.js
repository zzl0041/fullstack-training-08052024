/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  const numArr = num.toString().split("");
  const isDigit = numArr.find((ele) => ele === ".");
  const res = [];
  // if there is digit point
  if (isDigit) {
    while (numArr[numArr.length - 1] !== ".") {
      res.unshift(numArr.pop());
    }
    res.unshift(numArr.pop());
  }
  // push from back
  let count = 1;
  while (numArr.length > 0) {
    res.unshift(numArr.pop());
    if (numArr.length > 0 && count % 3 === 0) {
      res.unshift(",");
    }
    count++;
  }
  // console.log(res);
  return res.join("");
}

console.log(format(12345678));
console.log(format(123.4567));
