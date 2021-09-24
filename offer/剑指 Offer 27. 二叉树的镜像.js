/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (!root) return null;
  // 递归交换左叶子节点
  let left = mirrorTree(root.left)
  // 递归交换右叶子节点
  let right = mirrorTree(root.right)
  // 把左右节点替换
  root.left = right;
  root.right = left;
  return root;
};
// 迭代所有节点, 交换
var mirrorTree = function (root) {
  if (!root) return null;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
    [node.left, node.right] = [node.right, node.left]
  }
  return root;
};