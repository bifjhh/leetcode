/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  // 保存链表
  let current = head
  // 开启循环 current 不为空, 以及 还存在下一个值
  while (current && current.next) {
    // 如果 当前 节点的 val 和 next.val 相等
    if (current.val == current.next.val) {
      // 则 跳过下一个节点
      current.next = current.next.next
    } else {
      // 反之, 继续向下迭代
      current = current.next
    }
  }
  // 返回经过去重后的链表
  return head
};
// @lc code=end

