/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 如果字符串不为偶数, 则不是有效的, 因为无法闭合
  if (s.length % 2 !== 0) return false
  // 模拟栈, 用来存储出现过的括号
  const arr = []
  // 循环字符串
  for (let i = 0; i < s.length; i++) {
    const e = s[i]
    // 如果是左侧对称的括号
    if (hashMap[e]) {
      // 则push到 栈中
      arr.push(e)
      // 如果是右侧对应的括号, 则取栈的末尾数据进行对比
    } else if (e != hashMap[arr.pop()]) {
      // 如果有一个出现错误, 则整体为无效的
      return false
    }
  }
  // 按照相对应的方式, 此时栈中数据应当为 0
  return !arr.length

};

// 存储一个有效括号的映射
const hashMap = {
  '(': ')',
  '{': '}',
  '[': ']'
}
// @lc code=end