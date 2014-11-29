//@ sourceURL=intersection.js
/**
 * @see https://oj.leetcode.com/problems/intersection-of-two-linked-lists/

For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
begin to intersect at node c1.
Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
 *
 *
 *
 * triple inverse solution:
 
    inverse s1, got it's end as e1, got it's count as C1;
    test s2: if there exist a intersection, then the end of s2 should be s1. Then:
        inverse s2, got it's count as C2;
        inverse e, got it's count as C3, meanwhile all list are just like it is before;
        set the index of the intersection at s1 x, at s2 y, at s3 z, then:
            x + y = C1;
            x + z = C2;
            y + z = C3.
        get x, y, z, find the index;
        return the node;
    otherwise:
        inverse e to change s1 back;
        return null.

The LinkedList node defined in javascript:
{
    value : <value>,
    next : <node>
}

// test case:

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

e2 = {
    value : "e2",
    next : c0,
}, 

e1 = {
    value : "e1",
    next : e2,
}, 

e0 = {
    value : "e0",
    next : e1,
}, 

n1 = {
    value : "n1",
    next : c0,
}, 

n0 = {
    value : "n0",
    next : n1,
};

getIntersectionNode(e0, n0);

 */

var getIntersectionNode;

(function() {
/**
 * inverse a linkedlist, return it's node count and end node.
 */
var inverse = function(s) {
    
    var pointer = s,
        count = 0,
        next = pointer.next,
        tmpNext;
    
    while (next) {
        tmpNext = next.next;
        next.next = pointer;
        
        // prevent loop at the first node.
        if (pointer == s) {
            pointer.next = null;
        }
        
        pointer = next;
        next = tmpNext;
        
        ++count;
    }
    
    return {
        count : count,
        start : s,
        end : pointer
    };
}

getIntersectionNode = function(s1, s2) {
    
    // inversice the whole s1
    var c1, c2, c3,
        inversed,
        // end node of s1.
        e1,
        // node index since s1.
        intIndex,
        pointer;
    
    inversed = inverse(s1);
    c1 = inversed.count;
    e1 = inversed.end;
    
    // check if the end of s2 is s1.
    pointer = s2;
    while (pointer.next) {
        pointer = pointer.next;
    }
    
    // intersection detected
    if (pointer == s1) {
        inversed = inverse(s2);
        c2 = inversed.count;
        inversed = inverse(e1);
        c3 = inversed.count;
        
        intIndex = (c1 + c2 - c3) / 2;
        
        var counter = 0;
        while (pointer.next) {
            pointer = pointer.next;
            ++counter;
            
            if (counter == intIndex) {
                return pointer;
            }
        }
    }
    
    // no intersection 
    else {
        inverse(e1);
        return null;
    }
}

})();