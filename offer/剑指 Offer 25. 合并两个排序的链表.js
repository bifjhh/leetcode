/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const {
  ListNode,
  arrToList
} = require('../utils/index.js')

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2
  let r = new ListNode(0),
    current = r,
    n = null;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      n = new ListNode(l1.val)
      l1 = l1.next;
    } else {
      n = new ListNode(l2.val)
      l2 = l2.next;
    }
    current.next = n;
    current = current.next;
  }
  current.next = l1 || l2;
  return r.next;
};

var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1;
  }
  l2.next = mergeTwoLists(l2.next, l1)
  return l2;
};
let a1 = [1, 2, 4],
  a2 = [1, 3, 4];
// a1 = [], a2 = [];
// a1 = [1], a2 = [];
// a1 = [], a2 = [0];
// a1 = [1], a2 = [0, 1, 3];

let l1 = arrToList(a1);
let l2 = arrToList(a2);
var r = mergeTwoLists(l1, l2);
console.log(JSON.stringify(r));