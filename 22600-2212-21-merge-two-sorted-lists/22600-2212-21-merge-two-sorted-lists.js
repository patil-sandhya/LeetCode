/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let d = new ListNode(1)
    let cur = d
    let l=l1
    let r= l2
    while(l != null && r != null){
        if(l.val < r.val){
            cur.next = l
            l=l.next
        }else{
            cur.next = r
            r=r.next
        }
        cur=cur.next
    }
    if(l == null){
        cur.next = r
    }
    if(r == null){
        cur.next = l
    }
    return d.next

};