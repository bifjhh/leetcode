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
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  if (!head) return [];
  let res = [];
  const fn = (node) => {
    if (!node) return;
    fn(node.next);
    res.push(node.val)
  }
  fn(head)
  return res;
};
var reversePrint = function (head) {
  if (!head) return [];
  let res = [];
  while (head) {
    res.unshift(head.val)
    head = head.next;
  }
  return res;
};

var arr = [1, 3, 2];
var l = arrToList(arr);

console.log(reversePrint(l));