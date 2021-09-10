/**
 * 链表节点构造函数
 * @param {*} val 
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 根据数组转换为对应的链表
 * @param {array} array 
 */
function arrToList(array = []) {
  if (!array.length) return null;
  const list = new ListNode(array[0]);
  let current = list;
  for (let i = 1; i < array.length; i++) {
    const e = array[i];
    current.next = new ListNode(array[i]);
    current = current.next;
  }
  return list;
}

module.exports = {
  arrToList,
  ListNode,
};
