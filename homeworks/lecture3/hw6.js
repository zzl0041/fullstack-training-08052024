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

function numIdenticalPairs(nums) {
  // implement here

  // get counts for each number
  counts = nums.reduce((dict, key) => {
    dict[key] = (dict[key] || 0) + 1;
    return dict;
  }, {});
  // the number of pairs are nCr2
  return Object.values(counts).reduce((total, val) => 
    total + (val * (val - 1)) / 2
  , 0);
}


console.log(numIdenticalPairs([1,2,3,1,1,3]))  // Output: 4
console.log(numIdenticalPairs([1,1,1,1]))  // Output: 6
console.log(numIdenticalPairs([1,2,3]))  // Output: 0

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here
  return ([...s].map(c => "aeiou".includes(c.toLowerCase()) ? '' : c)).join('');
}

console.log(removeVowels("Each pair in the array are good"))  // Output: ch pr n th rry r gd