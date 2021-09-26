/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0],
    pre = 0;
  nums.forEach(e => {
    pre = Math.max(e, pre + e)
    max = Math.max(pre, max)
  });
  return max;
};

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums));