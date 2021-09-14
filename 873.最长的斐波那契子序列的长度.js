/*
 * @lc app=leetcode.cn id=873 lang=javascript
 *
 * [873] 最长的斐波那契子序列的长度
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  let set = new Set(arr),
    max = 0,
    n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let len = 2,
        a = arr[j],
        b = arr[i] + a;
      while (set.has(b)) {
        len++;
        [a, b] = [b, a + b]
        max = Math.max(max, len);
      }
    }
  }
  return max;
};
// @lc code=end