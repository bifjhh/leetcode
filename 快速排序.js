const nums = [9, 4, 10, 3, 1, 1, 0, 10, 8, 3, 9, 9, 4, 10, 10, 9, 9, 9, 1, 0]

console.time('quickSort')
// 基础版
function quickSort(arr = []) {
  // 数组只有1的时候, 直接返回当前数组
  if (arr.length <= 1) return arr
  // 获取中间位 索引
  let pivotIndex = Math.floor(arr.length / 2)
  // 获取中间位 数值
  let pivot = arr.splice(pivotIndex, 1)[0]
  // let pivot = arr[pivotIndex]
  let left = []
  let right = []
  // 循环对比
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i]
    // 比 中位数字 小的, 放在左侧数组
    if (e < pivot) {
      left.push(e)
    } else {
      // 反之, 放在右侧数组
      right.push(e)
    }
  }
  // return [...quickSort(left),...quickSort(right)]
  return [...quickSort(left), pivot, ...quickSort(right)]
}


console.log(quickSort(nums))
console.timeEnd('quickSort')

const nums2 = [9, 4, 10, 3, 1, 1, 0, 10, 8, 3, 9, 9, 4, 10, 10, 9, 9, 9, 1, 0]

console.time("quickSort3 time")
//三路快排
function quickSort3(arr = []) {
  if (arr.length == 0) return []
  let left = []
  let center = []
  let right = []
  let pivot = arr[0] //偷懒，直接取第一个,实际取值情况 参考[快速排序算法的优化思路总结]
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i]
    if (e < pivot) {
      left.push(e)
    } else if (e > pivot) {
      right.push(e)
    } else {
      center.push(e)
    }
  }
  return [...quickSort3(left), ...center, ...quickSort3(right)]
}
console.log(quickSort3(nums2));
console.timeEnd("quickSort3 time")