/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 对比是否都为空
  if (!p && !q) return true;
  // 一个为空, 则不相等
  if (!p || !q) return false;
  // 判断两者的值 相同的话继续递归调用对比两者的子节点值
  if (p.val == q.val) {
    return isSameTree(q.left, p.left) && isSameTree(q.right, p.right)
  } else {
    return false;
  }
};