/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  // 用来查找的set
  let set = new Set(arr),
    n = arr.length,
    max = 0;
  // 开始大循环
  for (let i = 0; i < n - 1; i++) {
    // 内循环
    for (let j = i + 1; j < n; j++) {
      // 当前值
      let a = arr[j],
        // 外层数值 + 当前内循环值的和
        b = arr[i] + a,
        len = 2;
      // 查找, 如果两者之和在数组中存在, 则继续向下
      while (set.has(b)) {
        // 长度+1
        len++;
        // 交换两个变量的值, a=b, b = 两者之和
        [a, b] = [b, a + b]
        // 获取max, 看看谁是最大的
        max = Math.max(max, len);
      }
    }
  }
  return max;
};
var arr = [1, 3, 7, 11, 12, 14, 18]
// var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// var arr = [2, 4, 7, 8, 9, 10, 14, 15, 18, 23, 32, 50]
var arr = [2, 4, 5, 6, 7, 8, 11, 13, 14, 15, 21, 22, 34]
// var arr = [1, 3, 5]
console.log(lenLongestFibSubseq(arr));