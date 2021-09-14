/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (!n) return 0;
  if (n < 3) return 1;
  let i0 = 0,
    i1 = 1;
  for (let i = 1; i < n; i++) {
    [i0, i1] = [i1, (i0 + i1) % 1000000007]
  }
  return i1;
};

// 尾递归
var fib = function (n, a = 1, b = 1) {
  if (n < 2) return n;
  if (n === 2) return b;
  return fib(n - 1, b, (a + b) % 1000000007)
};

//  记忆化 递归
var fib = function (n, a = 1, b = 1, memo = [0, 1, 2]) {
  if (n < 2) return n;
  if (n === 2) return b;
  if (memo[n] !== undefined) return memo[n];
  return memo[n] = fib(n - 1, b, (a + b) % 1000000007, memo);
};

/* 
写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

 

示例 1：

输入：n = 2
输出：1
示例 2：

输入：n = 5
输出：5

*/

console.log(fib(0));
console.log(fib(80));