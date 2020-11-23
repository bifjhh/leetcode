/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // 取绝对值, 正负数
  let old = Math.abs(x)
  // 记录翻转后的数值 
  let now = 0
  // 循环取余, 直到取完
  while(old > 0) {
    /**
     * 例如 123 % 10, 得到的就是最后一位数    3
     * 然后123 / 10, 取整, 得到的就是       12
     * 然后 记录                           3
     * 在下一轮, 12 % 10                   2
     * 3 * 10, 这里是进阶一位, 然后 + 2  为  32
     * 12 / 10                      取整为 1
     * 1 % 10                             1
     * 32 * 10  + 1                       321
     * 1/10                          取整 0
     * 结束循环
     */
    now = now * 10 + old % 10
    old = Math.floor(old / 10)
  }
  
  /**
   * 最后的判断, 因为之前while循环是用 >0 来作为结束 条件的
   * 所以使用了 abs  取绝对值
   * 现在判断 正负数的区间, 是否超出数值范围
   */
  // 取 Math.pow(2,31) 为最大数
  const max = Math.pow(2,31)
  //  超限一律返回 0
  if(x < 0){
    //  如果是负数, 没有超限则返回 -now 的值
    return now <= max ? -now : 0;
  }else{
    //  不是负数, 没有超限则返回自身值
    return now < max ? now : 0;
  }
};