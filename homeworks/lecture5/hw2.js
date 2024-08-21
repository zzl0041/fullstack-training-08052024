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
  // helper function to reverse a string
  function reverse(s, left, right) {
    while (left < right) {
      const temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      left++;
      right--;
    }
  }
  reverse (str, 0, str.length - 1);
  // console.log(str);
  let left = 0;
  str.forEach((char, i) => {
    if (char === ' ' || i === str.length - 1) {
      reverse(str, left, i === str.length - 1 ? i : i - 1);
      left = i + 1;
    }
  });
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input.join(''));