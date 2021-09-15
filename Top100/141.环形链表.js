/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * 哈希表判断
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 如果根为null 或者下一个就是null, 则直接返回false
  if (!head || head.next == null) return false;
  // 创建一个map表
  const map = new Map();
  // 迭代
  while (head) {
    // 链表向下进行
    head = head.next;
    // 判断当前节点是否在map表中, 是的话则表示出现环了
    if (map.has(head)) return true;
    // 否则就添加到map表中继续迭代
    map.set(head, 1);
  }
  return false;
};
// 快慢指针-如果环了, 可定快的那个能追到慢的那个
var hasCycle = function (head) {
  if (!head || head.next == null) return false;
  // 快指针先走一步
  let fast = head.next,
    slow = head;
  // 循环条件 两个指针不相同-相同了就是环了
  while (slow != fast) {
    if (!fast || !fast.next) return false;
    // 慢的一次走一步
    slow = slow.next;
    // 快的一次走俩
    fast = fast.next.next;
  }
  // 如果迭代结束了, 则表示两个指针相同了, 出现了环
  return true;
};
// @lc code=end