/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  // 队列? 数组实现栈
  this.stack = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  // push 没啥毛病直接肝
  this.stack.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  // 貌似说 对一个空的栈不会调用 pop 或者 top 操作
  // 所以判断一下, 非空才能进行pop
  if (!this.empty()) {
    return this.stack.pop()
  }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  // 貌似说 对一个空的栈不会调用 pop 或者 top 操作
  // 所以判断一下, 非空才能进行top
  if (!this.empty()) {
    return this.stack[this.stack.length - 1]
  }
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  // 直接判断 stack的length 是否 = 0
  return this.stack.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end