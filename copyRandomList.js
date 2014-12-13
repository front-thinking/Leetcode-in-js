//@ sourceURL=copyRandomList.js

/**
 *

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

 *
 *** 
 *
    To be simple, Let's say the node of the list looks like this:
        Node : {
            value : <Int>,
            next : <Node>,
            random : <Node>
        }
    As the Hasp in javascript can't use an object as the key, so it can't be used for this case. I've found another solution:
    
    For list A>B>C, first create the list A>A1>B>B1>C>C1, while A1 B1 C1 are deep copies of A, B and C.
    Scan the list, set X1.random = X.random.next, while X is the node in the original list;
    Seperate the two lists into A>B>C and A1>B1>C1, while the last one is what we're looking for.
    
 * Test case:
    var n4 = {
        value : 4,
        next : null,
        random : null
    },
    n3 = {
        value : 3,
        next : n4,
        random : null
    },
    n2 = {
        value : 2,
        next : n3,
        random : null
    },
    n1 = {
        value : 1,
        next : n2,
        random : null
    };

    n1.random = n1;
    n2.random = n4;
    n4.random = n3;

    copyRandomList(n1);

*/
var copyRandomList = function(l) {
    var root = l,
        newNode;
    while (l) {
        newNode = {
            value : l.value,
            next : l.next,
            random : null
        };
        l.next = newNode;
        l = newNode.next;
    }

    l = root;
    while (l) {
        l.random && (l.next.random = l.random.next);
        l = l.next.next;
    }

    l = root;
    var newRoot = l.next;
    while (l) {
        newNode = l.next;
        l.next = newNode.next;
        l = l.next;
        newNode.next = l && l.next || null;
    }

    return newRoot;
}