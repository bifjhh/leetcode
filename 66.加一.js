/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 遍历数组
  for (let i = digits.length - 1; i >= 0; i--) {
    // 获取当前索引+1后的值
    const e = digits[i] + 1
    // 赋值. 取余
    digits[i] = e % 10
    // 如果当前值+1后, < 10, 则表示不再向下一位进行+1了
    if (!Math.floor(e / 10)) return digits
  }
  // 如果走到这里, 则表示里面没有遇到 < 10的数字, 最后一位都+1,进阶了一位
  digits.unshift(1)
  // 返回数组
  return digits
};
// @lc code=end