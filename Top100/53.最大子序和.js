/**
 * 动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 只有一个直接返回
  if (nums.length === 1) return nums[0];
  // 用来作对比的值;
  let pre = 0;
  // 返回值
  max = nums[0];
  nums.forEach(e => {
    // 对比, 上一个数值+当前值, 和当前值, 取最大值
    pre = Math.max(pre + e, e);
    // 对比, max 和 pre 如果pre小于max , 则max 不变
    max = Math.max(max, pre);
  });
  // 返回最后的结果
  return max;
};

// dp 动态规划
var maxSubArray = function (nums = []) {
  // 只有一个直接返回
  if (nums.length === 1) return nums[0];
  let max = nums[0];
  const dp = Array(nums.length).fill(0)
  dp[0] = max;
  for (let i = 1; i < nums.length; i++) {
    const e = nums[i];
    dp[i] = Math.max(dp[i - 1] + e, e);
    if (max < dp[i]) {
      max = dp[i]
    }

  }
  return max;
};

/* 
示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [0]
输出：0
示例 4：

输入：nums = [-1]
输出：-1
示例 5：

输入：nums = [-100000]
输出：-100000

*/

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4,];
/*
 pre = 0
 pre + -2; < e(-2), pre =  0
 pre +  1; > e( 1), pre =  1;
 pre + -3; > e(-3), pre = -2;
 pre +  4; < e( 4), pre =  4;
 pre + -1; < e(-1), pre =  3;
 pre +  2; > e( 2), pre =  5;
 pre +  1; > e( 1), pre =  6;
 pre + -5; > e(-5), pre = 1;
 pre +  4; > e(4), pre = 5;
 max = pre 的最大值, 6
 */
console.log(maxSubArray(nums));