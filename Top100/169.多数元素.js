/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 排序取中间
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
};

// 计数
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];
  // half = 数组的一半值
  let max, half = Math.floor(nums.length / 2);
  // 初始化
  const map = {
    undefined: 0
  }
  nums.forEach(e => {
    // 计数+1
    map[e] = (map[e] || 0) + 1;
    // 保存较大值
    max = map[e] > map[max] ? e : max;
    // 如果某个元素到达中间值或者=, 直接返回
    if (map[max] >= half) return max;
  });
  return max;
};
var arr = [3, 2, 3]
var arr = [2, 2, 1, 1, 1, 2, 2];
var arr = [3, 3, 4]
var arr = [6, 5, 5]
var arr = [1, 2, 2, 3, 4, 4, 4]
console.log(majorityElement(arr));
// @lc code=end