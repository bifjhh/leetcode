/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 滚动数组
  // 已知3以下的枚举队列为其本身, 则直接返回
  if (n <= 3) return n;
  // 列出滚动数组的初始值
  let i0 = 1,
    i1 = 2,
    i2 = 3;
  // 开始循环(滚动)
  for (let i = 3; i < n; i++) {
    // 替换 下标0, 1, 依次向后替换
    [i0, i1] = [i1, i2];
    // 下标2 为下标 0+1的和
    i2 = i0 + i1;
  }
  // 返回滚动结束后的值
  return i2;
};
// 滚动数组, 使用两个变量
var climbStairs = function (n) {
  // 滚动数组
  // 已知3以下的枚举队列为其本身, 则直接返回
  if (n <= 3) return n;
  // 列出滚动数组的初始值
  let i0 = 1,
    i1 = 2;
  // 开始循环(滚动)
  for (let i = 3; i < n; i++) {
    // 替换 下标0, 1, 下标1 为下标 0+1的和
    [i0, i1] = [i1, i0 + i1];
  }
  // 返回滚动结束后的值
  return i1;
};
// 递归
var climbStairs = function (n) {
  if (n <= 3) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

// 记忆化 递归
var climbStairs = function (n, memo = [0, 1, 2]) {
  if (memo[n] !== undefined) return memo[n];
  return memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
};


/* 

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
*/

console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(45));
// @lc code=end