/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var threeSum = function (nums, target = 0) {
  let res = [], len = nums.length - 1, l, r, sum;
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] > target) return res;
    if (i && nums[i] == nums[i - 1]) continue;
    l = i + 1;
    r = len;
    while (l < r) {
      sum = nums[i] + nums[l] + nums[r];
      if (sum === target) {
        res.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] == nums[++l]);
        while (l < r && nums[r] == nums[--r]);
      } else if (sum < target) {
        while (l < r && nums[l] == nums[++l]);
      } else {
        while (l < r && nums[r] == nums[--r]);
      }
    }
  }
  return res;
};


var nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
/* 
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
*/