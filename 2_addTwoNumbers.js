/**
 * File: /Users/yanni/space/leetcode/2_addTwoNumbers.js
 * Project: /Users/yanni/space/leetcode
 * Created Date: Monday, March 23rd 2020, 9:03:40 pm
 * Author: Yanni Zhang
 * Email : iamyadi@126.com
 * ---------
 * Last Modified: Tuesday, March 31st 2020, 6:39:57 pm
 * Modified By: Yanni Zhang (iamyadi@126.com>)
 * ---------
 * Description:
 */

// 题目
// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

// 解题思路： 循环两个链表，然后相加

function Link(head) {
  this.val = head;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  let result = null;
  let pointer = result;
  let carry = 0;
  while ((l1 && l2) || carry > 0) {
    if (!pointer) {
      pointer = new Link(null);
      result = pointer;
    } else {
      let tmp = new Link(null);
      pointer.next = tmp;
      pointer = tmp;
    }
    let total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    if (total > 9) {
      pointer.val = total - 10;
      carry = 1;
    } else {
      pointer.val = total;
      carry = 0;
    }
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  pointer.next = l1 || l2;
  return result;
};
