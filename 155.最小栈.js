/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  // 最小栈
  this.min_stack = []
  // 正常栈
  this.__stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  const length = this.min_stack.length
  // 正常栈直接 push
  this.__stack.push(x)
  if (length) {
    // 作对比, 栈里只存最小的...
    // 反正也不迭代,最多是找一个最小的
    this.min_stack.push(
      Math.min(this.min_stack[length - 1], x)
    )
  } else {
    // 如果数组为空的时候直接push一个进去, 也不用对比了
    this.min_stack.push(x)
  }
};


/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  // 删除栈顶元素
  // ps: 栈顶...最后入栈的, 就是最后一个push 进去的, 所以是 数组的 pop方法
  this.min_stack.pop()
  this.__stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  // 获取栈顶元素....
  // 因为min_stack里面存的是一个最小栈, 顺序已经变了
  // 所以返回 正常栈 __stack的 栈顶元素 
  return this.__stack[this.__stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  // 获取栈中的最小元素, 直接用 最小栈 min_stack 的最后一个元素即可
  return this.min_stack[this.min_stack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

