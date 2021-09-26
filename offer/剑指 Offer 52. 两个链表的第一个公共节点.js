/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) return null;
  let s = headA,
    f = headB;
  while (s !== f) {
    s = s ? s.next : headB;
    f = f ? f.next : headA;
  }
  return s;
};
// 双指针思路, 每个链表都跑一遍两个链表的总长度, 总会相遇的
/* 
l1 = 1->2->3->4->5
l2 = 6->4->5
公共节点为 4->5
l1 1->2->3->4->5->6->4->5
l2 6->4->5->1->2->3->4->5
最终, 两者相等的节点 4->5
亦或者 两者都为null
*/
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;
  let s = headA,
    f = headB;
  while (s !== f) {
    if (!s) {
      s = headB;
    } else {
      s = s.next;
    }
    if (!f) {
      f = headA;
    } else {
      f = f.next;
    }
  }
  return s;
};