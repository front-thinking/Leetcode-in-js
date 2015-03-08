//@ sourceURL=validBST.js

/**
 *
 * valid binary search tree
 *
 *@see https://oj.leetcode.com/problems/validate-binary-search-tree/
 
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

1. The left subtree of a node contains only nodes with keys less than the node's key.
2. The right subtree of a node contains only nodes with keys greater than the node's key.
3. Both the left and right subtrees must also be binary search trees.
 
 *** Wrong Solution

What the code basically says is: A tree is a BST iff

1. (left child) <= root <= (right child), and
2. both left and right subtree are BST.


This fails for the tree {5, 3, #, 2, 8}, the reason is that this method only checks for contradicted values that are NEIGHBOURS. 
However, the contradiction could happen anywhere. 

So in the first solution, we always parse a limit area to the node value that's parsed reculsively from root.

*/
var validBST = function(root) {
    
    if (!root) return true;
    
    if (root.left && root.value < root.left.value) return false;
    if (root.right && root.right > root.right.value) return false;
    
    return validBST(root.left) && validBST(root.right);
}

/**
 *
 *

 *** Basic Solution 1,

Using MAX & MIN as initial range.

 */
var validBST = function(root) {
    return checkRange(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

var checkRange = function(node, leftVal, rightVal) {
    
    if (!node) return true;
    
    return node.value >= leftVal 
        && node.value <= rightVal 
        && checkRange(node.left, leftVal, node.value)
        && checkRange(node.right, node.value, rightVal);
}

/**
 *** Basic Solution 2,

Inorder traval with shared pointer.

 */
var validBST = function(root, prev) {
    
    if (!root) return true;
    prev = prev || {};
    
    // As "prev" is an Object and we're changing it's "node" property only,
    // Subfunction calls will share the same instance.
    // So we can parse the correct "prev" Object back after travalling through the left tree.
    if (!validBST(root.left, prev)) return false;
        
    var prevNode = prev && prev.node;
    if (prevNode && prevNode.value > root.value) return false;
    prev.node = root;
    
    if (!validBST(root.right, prev)) return false;
    
    return true;
}

// test case 1
var node5 = {
    value : 5
},node3 = {
    value : 3
},node2 = {
    value : 2
},node4 = {
    value : 4
};

node5.left = node3;
node3.left = node2;
node3.right = node4;
console.log(validBST(node5));


// test case 2
var node5 = {
    value : 5
},node3 = {
    value : 3
},node2 = {
    value : 2
},node8 = {
    value : 8
};

node5.left = node3;
node3.left = node2;
node3.right = node8;
console.log(validBST(node5));