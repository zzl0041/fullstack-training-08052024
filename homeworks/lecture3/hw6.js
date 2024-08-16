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
    const freq = {};
    let res = 0;
    for (let num of nums) {
        if (freq[num] === undefined) {
            freq[num] = 1;
        } else {
            freq[num]++;
        }
    }
    for (let key in freq) {
        const count = freq[key];
        res += (count * (count - 1)) / 2;
    }
    return res;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // 6
console.log(numIdenticalPairs([1, 2, 3])); // 0
console.log(numIdenticalPairs([])); // 0

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
    return s
        .split("")
        .filter((c) => !"aeiou".includes(c))
        .join("");
}

console.log(removeVowels("abcde")); // bcd
console.log(removeVowels("bdddd")); // bdddd
console.log(removeVowels("")); //
console.log(removeVowels("aeiou")); //
