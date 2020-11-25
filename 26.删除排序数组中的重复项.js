/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
// @lc code=start


/**
 * @param {number[]} nums
 * @return {number}
 *给定数组 nums = [1,1,2], 
 *函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
 *注意: 
      数组是排序过的数组: 所以要只要出现过第一次, 那么后续的相同的都可以跳过了
      要求是将原数组的 [前两个] 修改为 1, 2, 只要前面不重复的数值, 后面的是啥无所谓了
 *双指针法: 头一次理解
 *感觉还是要多读题
 */
var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;
  // 慢指针 r
  let r = 0
  //  循环, i 为快指针
  for (let i = 0; i < nums.length; i++) {
    // 如果 慢指针 r 索引 的数值 != 快指针 i 的数据, 则表示这个数据还没有出现过, 
    if (nums[i] !== nums[r]) {
      // 慢指针 +1
      r++
      // 将慢指针 r 索引的数据 修改为快指针的数据
      nums[r] = nums[i]
    }
    // 如果快指针的数据  nums[i] = nums[j] 则表示已经有了, 则不操作
    // 主要是给定的参数是已经排序过的数组, 所以开头第一个被慢指针记录过了, 相同的值也都是在第一个的后面
  }
  // 最后, 返回慢指针的索引 + 1, 则是不重复的数值
  return ++r
};
// @lc code=end