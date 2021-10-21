/**
 * 中心扩散法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  // 初始化,
  // 回文的长度 
  let len = 1,
    // 起始位置
    start = 0;
  // 循环, 
  for (let i = 0; i < s.length - 1; i++) {
    // 基数情况下
    let odd = getLen(s, i, i)
    // 偶数情况下
    let even = getLen(s, i, i + 1);
    // 获取最大值
    let max = Math.max(odd, even)
    // 如果长度大于之前存的最长长度, 则做替换
    if (max > len) {
      // 长度替换
      len = max;
      // 计算起始位置; i(当前索引) - (长度-1 / 2)获取中间的值; 因为是从i下标, 左右扩散, 所以, 取中间值计算
      start = Math.ceil(i - (len - 1) / 2)
    }
  }
  // 返回最长的串, 
  return s.slice(start, start + len)
};

/**
 * 获取l - r 向外扩散, 是否是回文, 返回其长度
 * @param {*} s 
 * @param {*} l 
 * @param {*} r 
 */
var getLen = function (s, l, r) {
  while (l >= 0 && r < s.length) {
    // 当前值相等
    if (s[l] == s[r]) {
      // 开始扩散, 左边向左, 右边向右
      l--;
      r++;
    } else { // 遇到不是回文, 结束循环
      break;
    }
  }
  // 返回回文的长度, r 结束位置, l 起始位置
  return r - l - 1;
};