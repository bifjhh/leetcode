/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // 哈希表来存储
  const hashmap = {}
  // 对字符串数组遍历
  for (let i = 0; i < strs.length; i++) {
    const e = strs[i]
    // 利用排序的方式排列字符串, 作为哈希表的key
    const key = e.split('').sort().join('')
    // 如果存在, 则直接push
    if (hashmap[key]) {
      hashmap[key].push(e)
    } else {// 反之则赋值
      hashmap[key] = [e]
    }
  }
  // 最后, 返回哈希表的values, 就是需要得到的结果
  return Object.values(hashmap)
};
// @lc code=end