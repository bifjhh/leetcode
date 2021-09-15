/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let res = ''
  for (const e of s) {
    if (!res.includes(e)) {
      res += e
    }
  }
  return res
};
// @lc code=end