//@ sourceURL=buildTree.js
/** build a serialized tree.
 *
 * @see http://oj.leetcode.com/problems/binary-tree-level-order-traversal-ii/
OJ's Binary Tree Serialization:
The serialization of a binary tree follows a level order traversal, where '#' signifies a path terminator where no node exists below.

Here's an example:
   1
  / \
 2   3
    /
   4
    \
     5
The above binary tree is serialized as "{1,2,3,#,#,4,#,#,5}".
 */
var buildTree;
(function() {

var createNode = function(val) {
    var node = null;
    if (val != "#") {
        node = {};
        node.value = val;
    }
    return node;
};

buildTree = function(arr, node) {
    var val, node = node;
    if (arr.length == 0) {
        return node || null;
    }
    
    if (!node || (node && node.value == undefined)) {
        node = createNode(arr.shift());
    }
    node && (node.left = createNode(arr.shift()));
    node && (node.right = createNode(arr.shift()));
    
    node && node.left && (node.left = buildTree(arr, node.left));
    node && node.right && (node.right = buildTree(arr, node.right));
    
    return node;
};

})();