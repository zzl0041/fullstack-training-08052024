/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let arr = Array.from(String(num), char => (char ==='.' ? '.': char));
  let counter = 0;
  for(let i = arr.length-1; i >= 0; i--) {
    counter ++;
    // if encounter decimal point, take off potential comma added 
    // and reset the counter to 0
    if(arr[i] === '.'){
      arr = arr.filter(element => element !== ',')
      counter = 0;
    } else {
      // add comma for every 3 dight except the index 0
      if(counter % 3 === 0 && i !== 0) {
        arr.splice(i, 0, ',')
      }
    }
  }
  return arr.join('');
}

console.log(format(12345678));    // 12,345,678
console.log(format(1234.56));     // 1,234.56
console.log(format(1234.56789));  // 1,234.56789
