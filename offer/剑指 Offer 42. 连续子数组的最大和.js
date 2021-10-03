/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length == 1) return nums[0]
  // 初始化 max为数组的第一个, pre 0
  let max = nums[0],
    pre = 0;
  for (let i = 0; i < nums.length; i++) {
    // pre = pre + e || e, 取最大值
    pre = Math.max(pre + nums[i], nums[i])
    // max 也一样, 如果pre相加, 比max 大,则保存, 否则不变
    max = Math.max(max, pre)
  }
  return max;
};

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums));