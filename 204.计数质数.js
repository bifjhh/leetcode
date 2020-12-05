/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  // 几个预设条件
  if (n === 0 || n === 1) return 0
  let res = 0
  // 循环判断吧...
  for (let i = 2; i < n; ++i) {
    res += isPrime(i)
  }
  return res
};

/**
 * 判断是不是质数(素数)
 * 质数, 除了1 和 其自身, 不能被其他数整除的数字
 * @param {*} n
 * @returns
 */
function isPrime(n) {
  for (let i = 2; i * i <= n; ++i) {
    if (n % i == 0) return false
  }
  return true
}

console.log(countPrimes(10));
// @lc code=end