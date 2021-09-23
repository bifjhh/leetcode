/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  // l 记录奇数, r 记录偶数
  let l = 0,
    r = 0;
  for (let i = 0; i < nums.length; i++) {
    // 如果是奇数, 那就与偶数交换位置, 每交换一次位置, r++
    if (nums[i] % 2 && l!=r) {
      [nums[l], nums[r]] = [nums[r], nums[l]]
      r++;
    }
    // l, 每次循环都++, l代表的是奇数的索引
    l++;
  }
  return nums;
};

/* 
输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。

*/
var arr = [1, 2, 3, 4]
// var arr = [2, 16, 3, 5, 13, 1, 16, 1, 12, 18, 11, 8, 11, 11, 5, 1]
console.log(exchange(arr));