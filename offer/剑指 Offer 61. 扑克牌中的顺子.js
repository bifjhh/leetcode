var isStraight = function (nums) {
  let r = nums.length - 1,
    l = 0, // 0的索引
    len = 0; // 计数
  // 排序
  nums.sort((a, b) => a - b)
  while (len < 4) {
    len++;
    // 正确的数值, 跳过
    if (nums[r] - nums[r - 1] == 1) {
      r--;
      continue
    };
    // 如果有0
    if (nums[l] == 0) {
      l++;
      // 修改 r索引的值为下一个正常值, 就不改变原数组了
      nums[r] = nums[r] - 1
    } else { // 不正确, 也没有0
      return false;
    }
  }
  return true;
};
// 最大值 最小值, set获取重复值
var isStraight = function (nums) {
  let min = 15,
    max = 0,
    i = 0,
    set = new Set();
  while (i < 5) {
    let e = nums[i];
    i++;
    // 跳过0
    if (e == 0) continue;
    // 重复的话就直接返回false
    if (set.has(e)) return false;
    // set 添加值
    set.add(e);
    // 获取最大值
    max = Math.max(max, e);
    // 获取最小值
    min = Math.min(min, e)
  }
  // 如果差值<5, 则正常
  return max - min < 5;
};
var nums = [0, 0, 1, 2, 5];
// var nums = [1, 2, 3, 4, 5];
var nums = [0, 0, 8, 5, 4];
var nums = [0, 0, 2, 2, 5];
console.log(isStraight(nums));