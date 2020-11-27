/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 果然, 读题最重要了, 异位词....比较两个字符串的内容否完全一致, 只是位置不一致

  // 长短不一肯定不行
  if (s.length !== t.length) return false
  // 如果完全相等, 那就ok了
  if (s === t) return true
  // 转换数组, 排序之后在转换字符串, 如果 一致那就OK了
  // 注意: Array的sort()方法默认把所有元素先转换为String再排序 而字符串根据ASCII码进行排序
  return s.split('').sort().toString() === t.split('').sort().toString()
};
// @lc code=end