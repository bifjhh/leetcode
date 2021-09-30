/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  return height(root) >= 0
};
// 递归检查节点是否平衡
var height = (root) => {
  if (root == null) return 0
  // 检查错叶子节点是否平衡
  let l = height(root.left);
  // 检查右叶子节点是否平衡
  let r = height(root.right);
  // 判断条件: -1 为不平衡, 如果有一个节点为不平衡, 则返回; 如果两者都平衡, 则判断两者的深度的差值, 是否超过1;
  if (l == -1 || r == -1 || Math.abs(l - r) > 1) return -1;
  // 返回节点的深度
  return Math.max(l, r) + 1;
}