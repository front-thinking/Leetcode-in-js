//@ sourceURL=inorderNextInBst.js

/**
 * Inorder Successor in Binary Search Tree
 * @see http://www.geeksforgeeks.org/inorder-successor-in-binary-search-tree/
 */

var findLeft = function(node) {
    var bufNode;
    while (bufNode.left && bufNode = bufNode.left);
    return bufNode;
}

var inorderNextInBst = function(node, root) {
    var bufNode = 0;
    if (node.parent) {
        if (bufNode = node.right) {
            return findLeft(bufNode);
        } else {
            while (bufNode = node.parent) {
                if (bufNode.left == node) {
                    return bufNode;
                }
                node = bufNode;
            }
            return null;
        }
    } else {
        if (node.right) {
            return findLeft(node.right);
        }
        
        while (root) {
            var target = null;
            if (root.value > node.value) {
                target = root;
                root = root.left;
            } else if (root.value < node.value){
                root = root.right;
            } else {
                break;
            }
        }
        return target;
    }
}