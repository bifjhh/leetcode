/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let map = {},
    max = 1;
  while (head) {
    map[max] = head;
    head = head.next;
    max++;
  }
  return map[max - k];
};
// 双指针
var getKthFromEnd = function (head, k) {
  let f = head;
  // 先走倒数的次数
  while (f && k > 0) {
    [f, k] = [f.next, k - 1]
  }
  // 相当于 总长度 - 倒数的长度, 得出 中间的长度, 走完中间的长度就剩下倒数的了
  // 然后再走剩下的,这个时候走剩下的就是倒数第k个节点了
  while (f) {
    [f, head] = [f.next, head.next]
  }
  return head;
};
