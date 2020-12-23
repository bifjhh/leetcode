/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 如果数组为空, 返回-1
  if (s == '') return -1
  // 创建哈希表
  const map = {}
  // 循环
  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    // 如果 当前字符串 e 没有出现过, 并且之后也没有, 则返回当前索引
    if (!map[e] && !s.includes(e, i + 1)) {
      return i
    }
    // 在哈希表中记录, 这个元素出现过
    map[e] = 1
  }
  // 如果最后都没有找到唯一的元素, 返回 -1
  return -1
};
// @lc code=end