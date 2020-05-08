// 二叉树 广度优先遍历, 需要借助队列

// 二叉树结构：
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

function bfs(nodes) {
    let result = [];
    let queue = [nodes];
    let count = 0;
    while (queue[count]) {
        result.push(queue[count].node);
        let right = queue[count].right;
        let left = queue[count].left;
        left && queue.push(left);
        right && queue.push(right);
        count++;
    }
    return result;
}
bfs(nodes);
