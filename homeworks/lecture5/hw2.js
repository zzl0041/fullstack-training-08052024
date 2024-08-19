/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function reverseWords(strArr) {
  // your code here
  if (strArr.length === 1) return strArr.join("");

  function reverseFn(left, right) {
    while (left < right) {
      let temp = strArr[left];
      strArr[left] = strArr[right];
      strArr[right] = temp;
      left++;
      right--;
    }
  }

  let start = 0;
  // ------ while iteration version ------
  // let end = 1;
  // while (end < strArr.length) {
  //   if (strArr[end] === " ") {
  //     reverseFn(start, end - 1);
  //     start = end + 1;
  //     end++;
  //   }
  //   end++;
  // }

  // ------ forEach version ------
  strArr.forEach((ele, idx) => {
    if (ele === " ") {
      reverseFn(start, idx - 1);
      start = idx + 1;
    }
  });
  reverseFn(start, strArr.length - 1);
  strArr.reverse();
}

const input = "the sky is blue".split(""); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input.join(""));
