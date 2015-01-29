/**
 * @see https://oj.leetcode.com/problems/reorder-list/
 *
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You must do this in-place without altering the nodes' values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}.

 *** 
 *
 * Case:
 *

var c2 = {
    value : "c2",
    next : null
}, 

c1 = {
    value : "c1",
    next : c2,
}, 

c0 = {
    value : "c0",
    next : c1,
}, 

n1 = {
    value : "n1",
    next : c0,
}, 

n0 = {
    value : "n0",
    next : n1,
};

reorderList(n0);
 *
 ***
 * locate the midium node with two pointer while one of them would be faster.
 * reverse and merge, nothing else.
 */

var reverseList = function(root) {
    var next = null,
        last = null,
        pointer = root;
    
    while (pointer) {
        next = pointer.next
        pointer.next = last;
        last = pointer;
        pointer = next;
    }
    
    return last;
}

var reorderList = function(root) {
    
    var midPointer = root, fastPointer = root;
    
    while (fastPointer && fastPointer.next) {
        midPointer = midPointer.next;
        fastPointer = fastPointer.next.next;
    }
    
    var reversed = reverseList(midPointer),
        next = root,
        revNext = reversed,
        pointer;

    while (pointer && reversed) {
        next = pointer.next;
        revNext = reversed.next;
        pointer.next = reversed;
        reversed.next = next;
        pointer = next;
        reversed = revNext;
    }
    
    return root;
}