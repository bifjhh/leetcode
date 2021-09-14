/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * 尾递归
 * @param {number} n
 * @return {number}
 */
var fib = function (n, a = 1, b = 1) {
  if (n < 2) return n;
  if (n === 2) return b;
  return fib(n - 1, b, a + b)
};
// 循环: 滚动数组
var fib = function (n) {
  if (n < 2) return n;
  if (n === 2) return 1;
  let a = 1,
    b = 1;
  for (let i = 2; i < n; i++) {
    [a, b] = [b, a + b]

  }
  return b;
};
// 记忆化 递归
var fib = function (n, memo = [0, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  return memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
};

// @lc code=end