/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  // 最大值list
  let res = [];
  // 需要返回的值的索引
  k -= 1;
  // 中序遍历
  const inorderNode = (node) => {
    if (!node || res.length > k) return;
    inorderNode(node.right)
    res.push(node.val)
    inorderNode(node.left)
  }
  inorderNode(root)
  return res[k];
};