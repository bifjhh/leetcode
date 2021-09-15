/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let sum = 0
//   for (let i = 0; i < prices.length; i++) {
//     const e = prices[i];
//     for (let j = prices.length - 1; j > i; j--) {
//       const profit = prices[j] - prices[i];
//       if (profit > sum) sum = profit;
//     }
//   }
//   return sum;
// };

var maxProfit = function (prices) {
  // max 最大化的利润
  // min 
  let min = prices[0], max = 0;
  for (let i = 1; i < prices.length; i++) {
    const e = prices[i];
    // 存储利润
    const profit = e - min;
    // 
    if (e < min) {
      min = e;
    } else if(profit > max) {
      max = profit;
    }
  }
  return max;
};

var maxProfit = function (prices) {
  let l = 0,
    r = 0,
    p = 0,
    length = prices.length;
  while (r !== length) {
    const rv = prices[r];
    const lv = prices[l];
    i = Math.max(rv - lv, i)
    if (rv < lv) l = r;
    r++
  }
  return p;
};
const prices = [7, 1, 5, 3, 6, 4]
// const prices = [3, 2, 5, 6, 0, 3]
console.log(maxProfit(prices));
// @lc code=end