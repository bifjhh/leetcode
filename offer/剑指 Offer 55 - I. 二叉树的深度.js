/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
// 跑完所有的节点
var maxDepth = function (root) {
  if (!root) return 0;
  let max = 0,
    queue = [root];
  while (queue.length) {
    let stask = []
    while (queue.length) {
      let n = queue.pop();
      n.left && s.push(n.left)
      n.right && s.push(n.right)
    }
    queue = stask
  }
  return max;
};