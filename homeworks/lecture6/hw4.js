/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // your code here
  let nums1, nums2 = num.toString().split(".")
  let arr1 = Array.from(nums1)
  for(let i = arr1.length-3; i>=0; i-= 3){
    arr1.splice(i,0,",")
  }
  ans = arr1.join('')
  if (nums2 != null){
    ans = ans + '.' + nums2
  } 
  return ans
}
