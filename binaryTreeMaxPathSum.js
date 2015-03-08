//@ sourceURL=binaryTreeMaxPathSum.js

/**
 *
 *

Given a binary tree, find the maximum path sum.

The path may start and end at any node in the tree.

For example:
Given the below binary tree,

       1
      / \
     2   3
Return 6.

 *** ideas
 *
 * Simple solution using reculsion.

Whenever a value that's calculated is bigger than 0, it's valuable.
The value could be:
    The value of the current node only;
    Current value + left sum;
    Current value + right sum;
    0 if all of the above values are negative.
While the calculated sum should be:
    path sum = left sum + right sum + current value

 */
var binaryTreeMaxPathSum = function(root) {
    var maxObj = {
        value : Number.NEGATIVE_INFINITY
    };
    findMaxPath(root, maxObj);
    return maxObj.value || 0;
};

var findMaxPath = function(root, maxObj) {
    
    if (!root) return 0;
    
    var sum = root.value,
        leftMax = findMaxPath(root.left, maxObj),
        rightMax = findMaxPath(root.right, maxObj);
    
    // Target max value could be left + right + nodeValue.
    // Howeve there could at most be only 1 of left & right value (or none of them) plus the current node returned as part of the path.
    maxObj.value = Math.max(sum + leftMax + rightMax, maxObj.value);
    sum += Math.max(leftMax, rightMax);
    
    if (sum > 0 ) {
        return sum;
    }
    return 0;
}

// test case 1
var node5 = {
    value : 5
},node3 = {
    value : -6
},node2 = {
    value : 2
},node8 = {
    value : 8
},node6 = {
    value : 6
},node_3 = {
    value : -3
},node4 = {
    value : 4
}

node5.left = node3;
node3.left = node2;
node3.right = node8;
node5.right = node6;
node6.right = node_3;
node_3.left = node4;
console.log(binaryTreeMaxPathSum(node5));

// test case 2
var node5 = {
    value : -5
},node3 = {
    value : -6
},node2 = {
    value : -2
},node8 = {
    value : -8
},node6 = {
    value : -6
},node_3 = {
    value : -3
},node4 = {
    value : -4
}

node5.left = node3;
node3.left = node2;
node3.right = node8;
node5.right = node6;
node6.right = node_3;
node_3.left = node4;
console.log(binaryTreeMaxPathSum(node5));

// test case 3
var node1 = {
    value : 1
},node2 = {
    value : -2
},node3 = {
    value : -3
},node4 = {
    value : 1
},node5 = {
    value : 3
},node6 = {
    value : -2
},node7 = {
    value : -1
};

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node4.left = node7;
console.log(binaryTreeMaxPathSum(node1));

/*
           1
       /      \
     -2       -3
     / \      /
    1   3   -2
   /
 -1
*/