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
  // reverse characters in str at index [left, right]
  const reverse = (str, left, right) => {
    while (left < right) {
      [str[left], str[right]] = [str[right], str[left]];
      left++;
      right--;
    }
  };
  reverse(str, 0, str.length - 1);
  let left = 0;
  for (let right = 0; right <= str.length; right++) {
    if (right === str.length || str[right] === " ") {
      reverse(str, left, right - 1);
      left = right + 1;
    }
  }
}

const input = "the sky is blue".split(""); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input.join("")); // blue is sky the
