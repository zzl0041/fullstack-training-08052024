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
  let start = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === ' ' || i === str.length) {
      reverse(str, start, i - 1);
      start = i + 1;
    }
  }

  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
}
const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e'];
reverseWords(input);
console.log(input.join(''));
