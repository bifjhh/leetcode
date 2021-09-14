/*
 * @lc app=leetcode.cn id=1414 lang=javascript
 *
 * [1414] 和为 K 的最少斐波那契数字数目
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
// var findMinFibonacciNumbers = function (k) {
//   if (k < 2) return k;
//   let memo = climbStairs(k).filter(e => e <= k);
//   console.log('memo', memo);
//   if (memo.includes(k)) return 1;
//   return find(k, memo) + 1;
// };
// var find = function (k, memo, n = 0) {
//   for (let i = memo.length - 1; i >= 0; i--) {
//     let e = memo[i],
//       b = k - e;
//     if (memo.includes(b)) {
//       return n + 1;
//     }
//     return findMinFibonacciNumbers(b, n + 1);
//   }
// }
// var climbStairs = function (n) {
//   const memo = [0, 1, 2];
//   let i0 = 1,
//     i1 = 2,
//     i = 3;
//   while (i1 <= n && i <= n) {
//     [i0, i1] = [i1, i0 + i1];
//     memo[i] = i1;
//     i++;
//   }
//   return memo;
// };
var findMinFibonacciNumbers = function (k) {
  if (k < 2) return k;
  // const memo = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170]
  const memo = [0, 1, 2];
  let i0 = 1,
    i1 = 2,
    i = 3;
  while (i1 <= k && i <= k) {
    [i0, i1] = [i1, i0 + i1];
    memo[i] = i1;
    i++;
  }
  // 上面先求出斐波那契值, 或者自己打表
  let len = 0;
  for (let j = memo.length - 1; j >= 0; j--) {
    let e = memo[j];
    // 如果当前值, 小于 k, 则表示至少有了一个
    if (k >= e) {
      ++len
      k -= e;
      // 如果 k - e <= 0, 则表示已经找到了直接返回
      if (k <= 0) return len;
    }
  }
  return len;
};

var k = 7;
// var k = 10;
// var k = 19;
// var k = 3;
console.log(findMinFibonacciNumbers(k));
// @lc code=end