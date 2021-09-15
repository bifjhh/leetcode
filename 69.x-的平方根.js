/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (!x) return 0
  // math.log 自然对数
  // exp
  let ans = Math.exp(0.5 * Math.log(x))
  return Math.floor((ans + 1) * (ans + 1) <= x ? ans + 1 : ans)
};
console.log(mySqrt(8));
// @lc code=end