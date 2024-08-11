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
  if (nums1.length > nums2.length) {
    const numsTemp = nums1;
    nums1 = nums2;
    nums2 = numsTemp;
  }
  const res = [];
  nums1.forEach((num) => {
    if (nums2.includes(num)) {
      res.push(num);
    }
  });
  return res;
};

// testing
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
