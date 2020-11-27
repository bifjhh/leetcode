/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // needle 为空 则返回0
  if (!needle) return 0
  // 如果haystack为空, 或者 needle 的长度 超过haystack, 则返回 -1. 因为肯定包含不了吖
  if (!haystack || needle.length > haystack.length) return -1
  // 判断, haystack 是否包含 needle 的内容
  if (haystack.includes(needle)) {
    // 截取并返回开始位置
    return haystack.indexOf(needle)
  } else {
    // 否则返回 -1
    return -1
  }
};
// @lc code=end