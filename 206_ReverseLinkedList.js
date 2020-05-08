/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 翻转链表
var reverseList = function (head) {
    let newHead = null;
    while (head) {
        let current = head;
        let next = head.next;
        current.next = newHead;
        newHead = current;
        head = next;
    }
    return newHead;
};