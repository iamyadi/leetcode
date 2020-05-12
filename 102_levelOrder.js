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
    if (!root) {
        return [];
    }
    let result = [];
    let queue = [root];
    let rawSplitPoint = 1;
    let count = 0;
    let children = [];
    let newSplitPoint = 1;
    while (queue[count]) {
        let currentNode = queue[count];
        currentNode.left && queue.push(currentNode.left) && newSplitPoint++;
        currentNode.right && queue.push(currentNode.right) && newSplitPoint++;
        children.push(currentNode.val);
        if (count + 1 === rawSplitPoint) {
            result.push([...children]);
            children = [];
            rawSplitPoint = newSplitPoint;
        }
        count++;
    }
    return result;
};