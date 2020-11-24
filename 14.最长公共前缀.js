/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) return ''
  // 随便选一个值作为 基准 字符串
  let base = strs[0]
  // 迭代剩余字符串
  for (let i = 1; i < strs.length; i++) {
    // j 循环的索引, 也是用来截取公共前缀的结束位置, 每一次大循环开始置为0
    let j = 0
    //  从0 开始循环字符串, 结束条件为 base && 当前循环的字符串 这两者的长度为结束
    for (; j < strs[i].length && j < base.length; j++) {
      // 如果遇到了不同, 则结束整个循环
      if (base[j] !== strs[i][j]) break
    }
    // 更改公共前缀 以 j 为结束位
    base = base.slice(0, j)
    // 如果 公共前缀为 '', 则表示数组内有数据为空, 这表示不可能有相同点了
    if (base === '') return ''
  }
  // 返回最后得到的前缀
  return base
};
// @lc code=end