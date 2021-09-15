/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) return 1;
  // 负数转正数进行处理
  if (n < 0) return 1 / myPow(x, -n);
  // 奇数
  if (n % 2) return x * myPow(x, n - 1);
  // 偶数
  return myPow(x * x, n / 2);
};

// console.log(myPow(2, 3));
// console.log(myPow(2, -2));
/* 
例: m(2,3)
  进栈: return 2 * m(2, 2)
    进栈: return m(2*2, 2/2)
      进栈: return 4 * m(4, 0)
      弹出: 4
    弹出: 4
  弹出: 8
*/
/* 
例: m(2,-2)
  进栈: return 1 / m(2, 2)
    进栈: return m(2*2, 2/2)
      进栈: return 4 * m(4, 0)
      弹出: 4
    弹出: 4
  弹出: 1/4=0.25
*/
// @lc code=end