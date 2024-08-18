/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function reverseWords(str) {
  // your code here
  str.reverse();
  // add extra space at the end for convinience
  str.push(' ');
  let left = 0;
  str.forEach((c, right, arr) => {
    if (c == ' ') {
      // swap each word to make them not reverse
      [...Array(Math.floor((right-1-left) / 2) + 1).keys()].forEach((elm, idx) => 
        [arr[left + idx], arr[right-1 - idx]] = [arr[right-1 - idx], arr[left + idx]]
      );
      left = right+1;
    }  
  })
  str.pop();
  return str;
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
console.log(reverseWords(input));