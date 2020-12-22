/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // 交换较长的字符串为a
  if (a.length < b.length) {
    [a, b] = [b, a]
  }
  let res = ''
  let s = 0
  // 遍历, 从末端取值
  for (let i = 1; i <= a.length; i++) {
    let v1 = +(a[a.length - i])
    // b为较短的字符串, 存在undefined
    let v2 = +(b[b.length - i] || 0)
    // 求和
    const e = s + v1 + v2
    // 如果 两者都为1, 则保存,等待下一个循环进行叠加
    s = Math.floor(e / 2)
    // 用余数相加
    res = `${e%2}${res}`
  }
  // 如果s还有值, 则相加后返回, 如果没有直接返回res
  return s ? `${s}${res}` : res
};
// @lc code=end