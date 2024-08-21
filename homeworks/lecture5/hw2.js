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
  let i = 0;
  let j = str.length - 1;

  while(i < j) {
    [str[i], str[j]] = [str[j], str[i]];
    i++;
    j--;
  }
  return str;

}

const input = 'the sky is blue'.split(' '); // [ 'the', 'sky', 'is', 'blue' ]
console.log(input);
console.log(reverseWords(input));           // [ 'blue', 'is', 'sky', 'the' ]