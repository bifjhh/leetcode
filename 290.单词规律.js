/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  // 把传过来的值, 转换为数组...以空格为区分的一个字符串
  s = s.split(' ')
  // 判断两个参数的长度是否一致, 不一致直接false了
  if (pattern.length != s.length) return false
  // 提取规律字符串, 并去重
  const k1 = [...new Set([...pattern])]
  // 一样的, 类似的字符串, 去重后就是相应的规律
  const k2 = [...new Set(s)]
  // 开始循环, 随便选个无所谓了, 长度不一样的已经在上面返回false了
  for (let i = 0; i < s.length; i++) {
    // 如果 p(规律)的位置, 和 需要判断的字符串的规律不同, 直接返回false
    if (k1.indexOf(pattern[i]) !== k2.indexOf(s[i])) return false
  }
  // 如果能够通过, 则返回true
  return true
};
/** 
 * 例如
 * abba                   [a,b]           0, 1, 1, 0
 * dog cat cat dog        [dog cat]       0, 1, 1, 0
*/
// @lc code=end