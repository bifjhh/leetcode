/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 记录长度
  let r = 0
  for (let i = 0; i < nums.length; i++) {
    // 题目要求: 不需要考虑数组中超出新长度后面的元素
    // 大意: 把前面的拍正确就行了
    // 如果当前元素!= val
    if (nums[i] !== val) {
      // , 则将当前元素复制到 r 的位置
      nums[r] = nums[i]
      // 让后 r ++ 递增
      r++
    }
  }
  // 返回最后 r的 长度, 去除和 val相同的值
  return r
};
// @lc code=end