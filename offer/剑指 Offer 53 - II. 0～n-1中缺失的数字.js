// 二分
var missingNumber = function (nums) {
  if (nums[0] == 1) return 0;
  // l 左侧索引. r 右侧
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    // m 为 从l 到 r 中间的节点
    // 剩余索引 /2 找到中点 + 已经走过的点
    let m = Math.floor((r - l) / 2) + l;
    // ((r - l) / 2) + l 和 ((r + l) / 2) 相同
    // 直接是(r + l) / 2  = 从 l 到 r 的中中间位置的索引
    // let m = Math.floor((r + l) / 2);

    // 如果这个中间点的值是正确的, 
    if (nums[m] == m) {
      // 则左侧索引修改为中间点的下一个
      l = m + 1
    } else {
      // 反之, 就是出现了问题; 把右侧修改为中点的前一位, 然后继续
      r = m - 1;
    }
  }
  // 返回l 结束条件
  return l;
};

// // 整体循环一遍
// var missingNumber = function (nums) {
//   // 开头错了直接返回
//   if (nums[0] == 1) return 0;
//   let len = nums.length,
//     i = 1;
//   // 循环找位置错了的
//   for (i; i < len; i++) {
//     // 找到了直接return
//     if (nums[i] != i) return i;
//   }
//   // 找不到的话就返回最后的索引吧
//   return i;
// };

/* 
输入: [0,1,3]
输出: 2
示例 2:

输入: [0,1,2,3,4,5,6,7,9]
输出: 8
*/
var arr = [0, 1, 3];
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 9]
// var arr = [0]
// var arr = [0, 1]
// var arr = [0, 2, 3]
console.log(missingNumber(arr));