/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
// 利用js  特性 arr.indexOf 查找, 有点取巧
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const index = nums.indexOf(target - nums[i])
    if(i!== index && ~index ) {
      return [i, index]
    }
  }
};
*/
// 通过map  一个 哈希表的意思, 获取两个索引

var twoSum = function(nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i]
    // 得到  target - v 的差值
    const num = target - v
    // 如果这个差值在 map 中 已存在, 则return [map的索引, 当前索引]
    if(map[num] !== undefined) {
      return [map[num], i]
    }
    map[v] = i
  }
};