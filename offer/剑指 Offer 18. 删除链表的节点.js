/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head.val == val) return head.next;
  let pre = null,
    current = head;
  while (current && current.val != val) {
    pre = current;
    current = current.next;
  }
  pre.next = current.next;
  return head;
};

var deleteNode = function (head, val) {
  if (head.val == val) return head.next;
  let current = head;
  while (current) {
    if (current.next && current.next.val === val) {
      current.next = current.next.next;
      return head;
    }
    current = current.next;
  }
  return head;
};