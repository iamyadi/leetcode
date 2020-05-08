// 将数组转为链表结构
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class Link {
    constructor(a){
        this.value = a;
        this.next = null;
    }
};

function arrayToLink(arr) {
    let head = null;
    let node = null;
    for (let i = 0; i < arr.length; i++) {
        if (!head) {
            head = new Link(arr[i]);
            node = head;
        } else {
            node.next = new Link(arr[i]);
            node = node.next;
        }
    }
    return head;
}