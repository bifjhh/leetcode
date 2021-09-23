/**
 * @param {number[]} nums
 * @return {number}
 */
var minArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let min = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (min > nums[i]) return nums[i];
  }
  return min;
};
var minArray = function (nums) {
  return Math.min(...nums)
};
var arr = [3, 4, 5, 1, 2]
var arr = [2, 2, 2, 0, 1]