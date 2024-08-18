/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 *
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 *
 */
const intersection = (nums1, nums2) => {
  // Your solution here
  // O(nlogn + n)
  let set1 = nums1
    .toSorted((a, b) => a - b)
    .filter((elm, idx, arr) => elm != arr[idx-1]);
  let set2 = nums2
    .toSorted((a, b) => a - b)
    .filter((elm, idx, arr) => elm != arr[idx-1]);
  // make set1 be the smaller size one
  [set1, set2] = set1.length > set2.length ? [set2, set1] : [set1, set2];
  let idx1 = 0;
  let idx2 = 0;
  let result = [];
  // O(k1 + k2)
  while ((idx1 < set1.length) && (idx2 < set2.length)) {
    if (set1[idx1] == set2[idx2]) {
      result.push(set1[idx1]);
      idx1++;
    }
    else if (set1[idx1] < set2[idx2]) {
      idx1++;
    }
    else {
      idx2++;
    }
  }
  return result;
};

console.log(intersection([1,2,2,1], [2,2]));
console.log(intersection([4,9,5], [9,4,9,8,4]));