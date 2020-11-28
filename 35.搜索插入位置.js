/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  /*   
    // 使用 includes 判断是否存在
    if (nums.includes(target)) {
      // 存在的话直接返回索引
      return nums.indexOf(target)
    }
    // 不存在则 循环
    for (let i = 0; i < nums.length; i++) {
      // 排序数组, 如果id值 比 target 大, 那么target就会排在 i前面, 就是i后移, 返回 i
      if (nums[i] > target) {
        return i
      }
    }
    // 如果都没有, 那就是target是最大, 返回数组的最后一个位置 
    return nums.length */

  // 另一个方法 只用 for 循环
  // 判断几个条件 直接返回  0 的
  if (target === 0 || nums.length === 0 || target < nums[0]) {
    return 0
  }
  // 索引放在外面, 如果循环里没有找到, 可以直接返回 i++之后的值
  let i = 0
  for (; i < nums.length; i++) {
    // 相等: 直接返回 i
    if (nums[i] === target) return i
    //  i 的值 > target 也直接返回
    if (nums[i] > target) return i
  }
  // 上面条件都没有打中, 那也返回 i自增之后的值
  return i
};
// @lc code=end