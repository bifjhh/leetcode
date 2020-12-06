/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (n) {
  const res = []
  // 大循环, 以n开启
  for (let i = 0; i < n; i++) {
    // 每一层的数字
    const arr = []
    arr[0] = 1
    arr[i] = 1
    // 第二层循环, 因为每一层都有 相应的数字
    for (let j = 1; j < i; j++) {
      // 获取上一层的数组
      const old = res[i - 1]
      // 计算当前位置(右上角) 和 当前位置-1(左上角) 的和
      arr[j] = old[j - 1] + old[j]
    }
    // 然后把单层的数组push到大三角的数组内
    res.push(arr)
  }
  // 返回整个数组
  return res
};
// @lc code=end