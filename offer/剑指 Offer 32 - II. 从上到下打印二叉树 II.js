/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  const levelNode = (node, level = 0) => {
    res[level] = res[level] || []
    res[level].push(node.val);
    node.left && levelNode(node.left, level + 1)
    node.right && levelNode(node.right, level + 1)
  }
  levelNode(root)
  return res;
};
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [
    [root, 0]
  ]
  const res = [];
  while (queue.length) {
    // shift 先从左侧开始添加值
    let [node, level] = queue.shift();
    res[level] = res[level] || []
    res[level].push(node.val);
    node.left && queue.push([node.left, level + 1])
    node.right && queue.push([node.right, level + 1])
  }
  return res;
};