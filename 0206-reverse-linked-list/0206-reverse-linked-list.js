/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
     let previous = null
    let currentNode = head;
    while(currentNode  != null){
       let nextNodeRef = currentNode .next
        currentNode .next = previous ;
        previous = currentNode 
        currentNode = nextNodeRef 
    }
    return previous

};