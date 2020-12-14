/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if (nums.length < 2) return false
/* 
  // 哈希表   
  const hashMap = {}
  for (const e of nums) {
    if (hashMap[e]) {
      return true
    }
    hashMap[e] = true
  } */
  // 先排序...
  nums.sort((a,b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    // 查找有无重复的就行了
    if (nums[i] === nums[i+1]) return true
  }
  return false
};
// @lc code=end