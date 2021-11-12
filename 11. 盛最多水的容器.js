/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0,
    r = height.length - 1,
    res = 0;
  // 循环
  while (l < r) {
    // 计算剩余容器的个数
    let n = r - l;
    // 盛水容器以最最小值为依据
    if (height[l] < height[r]) {
      // 计算盛水量 最大值
      res = Math.max(res, n * height[l++])
    } else {
      res = Math.max(res, n * height[r--])
    }
  }
  return res;
};