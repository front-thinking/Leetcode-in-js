//@ sourceURL=halfNum.js
/**
 *
 * @see http://oj.leetcode.com/problems/path-sum/
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
 *
 *
var tree = {
    value : 5,
    left : {
        value : 4,
        left : {
            value : 11,
            left : {
                value : 7
            },
            right : {
                value : 2
            }
        }
    },
    right : {
        value : 8,
        left : {
            value : 13
        },
        right : {
            value : 4,
            right : {
                value : 1
            }
        }
    }
}
hasPathSum(tree, 22);
*/
var hasPathSum = function(root, sum) {
    var rlt = false;
    if (!rlt && root.left) {
        root.left.value += root.value;
        rlt = rlt || hasPathSum(root.left, sum);
    }
    if (!rlt && root.right) {
        root.right.value += root.value;
        rlt = rlt || hasPathSum(root.right, sum);
    }
    if (!rlt && !root.left && !root.right) {
        if (root.value == sum) {
            rlt = true;
        }
    }
    return rlt;
}