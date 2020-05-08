// 左右翻转二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.node = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let nodes = {
    node: 6,
    left: {
      node: 5, 
      left: { 
        node: 4 
      }, 
      right: { 
        node: 3 
      }
    },
    right: { 
      node: 2, 
      right: { 
        node: 1 
      } 
    }
  }
var invertTree = function (root) {
    if (!root) {
        return null;
    }
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
};
