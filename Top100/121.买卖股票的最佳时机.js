/**
 * 直接迭代, 容易超时...
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    const e = prices[i]
    for (let j = i + 1; j < n; j++) {
      max = Math.max(prices[j] - prices[i], max);
    }
  }
  return max;
};
// 一次循环
var maxProfit = function (prices) {
  const n = prices.length;
  let min = Infinity;
  let max = 0;
  for (let i = 0; i < n; i++) {
    const e = prices[i]
    if (e < min) {
      min = e;
      continue;
    }
    // 取利润最大值
    max = Math.max(e - min, max)
  }
  return max;
};

var arr = [7, 1, 5, 3, 6, 4];
// var arr = [7, 6, 4, 3, 1]
console.log(maxProfit(arr));