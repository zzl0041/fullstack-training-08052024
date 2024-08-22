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
  function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
  }

  // Step 1: Reverse the entire string array
  reverse(str, 0, str.length - 1);

  // Step 2: Reverse each word within the reversed array
  let start = 0;
  for (let i = 0; i <= str.length; i++) {
      // When we hit a space or the end of the array, reverse the word
      if (i === str.length || str[i] === ' ') {
          reverse(str, start, i - 1);
          start = i + 1;
      }
  }
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input.join(''));