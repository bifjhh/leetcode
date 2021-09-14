/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * 记忆化递归
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n, memo = [0, 1, 1, 2]) {
  if (memo[n] !== undefined) return memo[n];
  return memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
};

// 滚动数组的方式
var tribonacci = function (n) {
  if (!n) return 0;
  if (n < 3) return 1;
  let a = 1,
    b = 1,
    c = a + b;
  for (let i = 3; i < n; i++) {
    [a, b, c] = [b, c, a + b + c];
  }
  return c;
};
// @lc code=end