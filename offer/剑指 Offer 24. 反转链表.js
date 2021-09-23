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
var reverseList = function (head) {
  let c = head,
    p = null,
    n = null;
  while (c) {
    n = c.next;
    c.next = p;
    [p, c] = [c, n];
  }
  return p;
};

/* 
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

*/