/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [],
    len = nums.length - 1;
  // 排序, 更容易计算
  nums = nums.sort((a, b) => a - b);
  for (let k = 0; k < len - 1; k++) {
    // 当前值 大于0, 则后面所有的值, 都大于0, 因为是排序过了 
    if (nums[k] > 0) break;
    // 如果值相同, 则跳过
    if (k && nums[k] == nums[k - 1]) continue;
    // 双指针, l = k的下一个索引, r 每次从末端开始
    let l = k + 1,
      r = len;
    while (l < r) {
      let sum = nums[k] + nums[l] + nums[r];
      if (sum == 0) {
        // =0的情况下 push结果
        res.push([nums[k], nums[l], nums[r]])
        // 跳过重复的值
        while (l < r && nums[l] == nums[++l]);
        while (l < r && nums[r] == nums[--r]);
      } else if (sum < 0) { // sum 小了, 则l 指针++到下一个不重复的值
        while (l < r && nums[l] == nums[++l]);
      } else { // sum 大了, 则r 指针--到下一个不重复的值
        while (l < r && nums[r] == nums[--r]);
      }
    }
  }
  return res;
};