/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = []
    nums.forEach((e, i) => {
      if(arr.length>1)return false
      for (let j = i+1; j < nums.length; j++) {
        if (e + nums[j] === target) arr = [i, j]
      }
    })
    return arr
};

