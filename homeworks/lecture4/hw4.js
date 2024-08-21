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

// 1. nums1 中元素去重 (用set)
// nums1 -> set1 : Set(3) { 4, 9, 5 }
// 2. nums2 中找到nums1中有的元素 
// [9,4,9,8,4] -> [ 9, 4, 9, 4 ]
// 3. nums2 中元素去重 （用set）
// [ 9, 4, 9, 4 ] -> Set(2) { 9, 4 }
// 4. 用...将Set(2) { 9, 4 }转为[ 9, 4 ]

const intersection = (nums1, nums2) => {
  // Your solution here
  // Convert the first array into a Set to remove duplicates and allow for fast lookup
  const set1 = new Set(nums1);
  const res = [...new Set(nums2.filter(num => set1.has(num)))];

  // // 1. Create an empty array to store the filtered results
  // let filteredNums = [];
  // // 2. Iterate over nums2 and filter out elements that are also in set1
  // for (let num of nums2) {
  //   if (set1.has(num)) {
  //     filteredNums.push(num); // Add the element to the filteredNums array if it's in set1
  //   }
  // }
  // console.log(filteredNums)
  // // 3. Create a Set from filteredNums to remove duplicates
  // let uniqueFilteredNums = new Set(filteredNums);
  // console.log(uniqueFilteredNums)
  // // 4. Convert the Set back into an array
  // const res = [...uniqueFilteredNums];

  return res;
};

// const nums1 = [1,2,2,1], nums2 = [2,2];
const nums1 = [4,9,5], nums2 = [9,4,9,8,4]
console.log(intersection(nums1, nums2))