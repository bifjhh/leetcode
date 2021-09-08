/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /**
   * todo 思路
   * 1. for 循环
   * 2. map 记录查找过的值, 记忆; target - e key 为 两者差值, val 为 下标
   * 3. 如果e 在map中有查找到, 则返回 e 记录的下标 和当前下标
   */
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    if (map[e] !== undefined) return [map[e], i];
    let k = target - e;
    map[k] = i;
  }
};
// let nums = [2, 7, 11, 15],
//   target = 9;
// console.log(twoSum(nums, target));
// @lc code=end