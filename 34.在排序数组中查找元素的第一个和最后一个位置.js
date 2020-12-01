/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const res = [-1, -1]
  if (nums.length === 0) return res
  
  // 通过 indexof 判断是否有值
  const index = nums.indexOf(target)
  if (index !== -1) {
    // 设定初始值都为 index
    res[0] = index
    res[1] = index
    // 以index 为起点, 向后查找是否有另一个值
    for (let i = index + 1; i < nums.length; i++) {
      const e = nums[i];
      // 如果找到直接则不断更新结束位置的值
      if (e === target) {
        res[1] = i
      }
    }
  }

  // 如果没找到, 返回的则是 -1,-1 默认值
  return res
};
// @lc code=end