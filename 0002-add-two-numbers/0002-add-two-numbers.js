/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let d = new ListNode(0)
    let cur = d;
    let car =0
    while(l1 != null || l2 != null || car == 1){
        let sum = car
        if(l1 != null){
            sum = sum + l1.val
            l1 = l1.next
        }
        if(l2 != null){
            sum= sum + l2.val
            l2 = l2.next
        }
        let node = new ListNode(sum % 10)
         cur.next = node
         car = Math.floor(sum / 10)
         cur = cur.next
    }
    if(car > 0){
        cur.next = new ListNode(car)
    }
    return d.next
};