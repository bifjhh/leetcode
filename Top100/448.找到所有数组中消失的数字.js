/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * 用集合做查询
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let set = new Set(nums),
    arr = [],
    size = set.size;
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(i + 1)) {
      arr.push(i + 1)
      if (arr.length + size == nums.length) return arr;
    }
  }
  return arr;
};


// 数组
var findDisappearedNumbers = function (nums) {
  let n = nums.length,
    len = 0;
  for (let i = n; i > 0; i--) {
    if (!nums.includes(i)) {
      nums.unshift(i)
      len++;
    }
  }
  return nums.splice(0, len)
};
var findDisappearedNumbers = function (nums) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i + 1)) {
      arr.push(i + 1)
    }
  }
  return arr;
};
var nums = [4, 3, 2, 7, 8, 2, 3, 1]
// var nums = [1, 1]
// var nums = [5, 4, 6, 7, 9, 3, 10, 9, 5, 6]
var nums = [4, 3, 2, 7, 8, 2, 3, 1]

console.log(findDisappearedNumbers(nums));
// @lc code=end