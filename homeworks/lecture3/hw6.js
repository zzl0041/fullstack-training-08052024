/**
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 * Example 1:
 * Input: nums = [1,2,3,1,1,3]  Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5)
 *
 * Example 2:
 * Input: nums = [1,1,1,1]  Output: 6
 * Explanation: Each pair in the array are good.
 *
 * Example 3:
 * Input: nums = [1,2,3]    Output: 0
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 */

// Double pointer
function numIdenticalPairs(nums) {
  // implement here
  let count = 0;
  let left = 0; right = 1;
  while(left < nums.length - 1) {
    if(right === nums.length) {
      left++;
      right = left +1;
    }
    if(nums[left] === nums[right]) {
      count++;
    }
    right++;
  }
  return count;
}

console.log(numIdenticalPairs([1,2,3,1,1,3]))
console.log(numIdenticalPairs([1,1,1,1]))
console.log(numIdenticalPairs([1,2,3]))
console.log(numIdenticalPairs([]))

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here
  // 1. Using replace()
  // return s.replace(/[aeiou]/gi, '');
  // 2. Using set
  let res = '';
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let char of s) {
    if(!vowels.includes(char)) {
      res += char;
    }
  }
  return res;
}
console.log(removeVowels("leetcodeisacommunityforcoders")); // ltcdscmmntyfrcdrs
console.log(removeVowels("hello")); // hll
console.log(removeVowels("aeiou")); // ""