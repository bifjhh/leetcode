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
var isSymmetric = function (root) {
  if (!root) return true;
  let queue = [
    [root.left, root.right]
  ]
  while (queue.length) {
    const [left, right] = queue.pop();
    console.log(left, right)
    if (left && right && left.val === right.val) {
      queue.push([left.left, right.right])
      queue.push([left.right, right.left])
    } else if (left != right) return false
  }
  return true;
};

// 递归
var isSymmetric = function (root) {
  if (!root) return true;
  const isMirror = (l, r) => {
    // 左右都为null 继续
    if (l === r) return true;
    // 有一个为false 则结束
    if (!l || !r) return false;
    // 比对两个节点的值, 并递归对比两个节点的子节点
    return l.val === r.val && isMirror(l.left, r.right) && isMirror(l.right, r.left)
  }
  return isMirror(root.left, root.right)
};