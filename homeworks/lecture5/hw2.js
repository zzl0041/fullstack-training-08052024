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
  let ans = []
  let tmp = ""
  for(let s of str){
    if (s === " " && tmp !== ''){
      ans.push(ans)
      tmp = ""
    }else{
      tmp += s
    }
  }
  if (tmp !== "")  {
    ans.push(tmp)
  }
  return ans.reverse().join(" ")
}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);