/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  return String(num).split(".").reduce(
    (new_num_arr, elm, idx)=> {
      // after .
      if (idx) {
        new_num_arr += "." + elm
      }
      // before .
      else {
        new_num_arr += elm.split("").reverse().map((digit, pos) => 
          ((pos) % 3) ? digit : (digit + ",")
        ).reverse().join("").slice(0, -1);
      }
      return new_num_arr;
    }, ""
  );
}

console.log(format(12345678));
console.log(format(1234.56));