//@ sourceURL=commonAncestor.js

/**
 * Design an algorithm and write code to find the first common ancestor of two nodes
 * in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not
 * necessarily a binary search tree.

 *** Ideas:
 * for each node, if a target was found on its left child and the other one at its right side, 
 *  then the current node is what we're looking for.
 * otherwise if a traget was fond in its left(right) but nothing found in its right(left), the common accestor must be in its parent.
 *  in this case we just return what's found for all children of the current node.
 * do it reculsively until we find both targets.
 * specially, if one target is in children of another one, we'll need to measure the current result for both left side result and right side result.

Test case: 

var n0 = {
    value : 0,
    left : null,
    right : null
},
n1 = {
    value : 1,
    left : null,
    right : null
},
n2 = {
    value : 2,
    left : null,
    right : null
},
n3 = {
    value : 3,
    left : null,
    right : null
},
n4 = {
    value : 4,
    left : null,
    right : null
},
n5 = {
    value : 5,
    left : null,
    right : null
},
n6 = {
    value : 6,
    left : null,
    right : null
},
n7 = {
    value : 7,
    left : null,
    right : null
},
n8 = {
    value : 8,
    left : null,
    right : null
},
n9 = {
    value : 9,
    left : null,
    right : null
}

n0.left = n1;
n0.right = n2;

n1.left = n3;
n1.right = n4;

n2.left = n5;
n2.right = n6;

n5.left = n7;
n4.left = n8;
n3.right = n9;

console.log(scan(n0, n3, n9));
 
*/

var commonAncestor = function(node, p, q) {
    
    if (!node) return 0;
    
    var leftResult, rightResult,
        found = 0;
    
    if (node == p) {
        found = 1;
    }
    
    if (node == q) {
        found = 2;
    }
    
    leftResult = commonAncestor(node.left, p, q);
    rightResult = commonAncestor(node.right, p, q);
    
    if ((leftResult | rightResult | found) == 3) {
        return node;
    }
    
    if (leftResult) return leftResult;
    if (rightResult) return rightResult;
    
    return found;
}