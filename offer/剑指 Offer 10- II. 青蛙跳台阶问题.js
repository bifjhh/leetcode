/**
 * @param {number} n
 * @return {number}
 */
var i = 0;
var numWays = function (n, a = 1, b = 1) {
  if (n < 2) return 1;
  if (n === 2) return (a + b) % 1000000007;
  console.log('num', ++i);
  return numWays(n - 1, b, (a + b) % 1000000007);
};
// 直接递归容易超限
// var numWays = function (n) {
//   if (n < 2) return 1;
//   console.log('num', ++i);
//   return numWays(n - 1) % 1000000007 + numWays(n - 2) % 1000000007
// };
// // 直接递归容易超限
var numWays = function (n, a = 1, b = 1, memo = [1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  if (n === 2) return (a + b) % 1000000007;
  console.log('num', ++i);
  return memo[n] = numWays(n - 1, b, (a + b) % 1000000007, memo)
};
var numWays = function (n) {
  let a = 1,
    b = 1;
  while (n-- > 1) {
    [a, b] = [b, (a + b) % 1000000007]
  }
  return b;
};

console.log(numWays(2));
console.log(numWays(4));
console.log(numWays(5));
// console.log(numWays(10));
console.log(numWays(7));