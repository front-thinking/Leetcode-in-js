//@ sourceURL=buildTree.js

/**
 *
 *** ideas

Generally, in other languages, params would be node Objects or structures,
and it's also possible that we use a hash and set keys with objects. 
However only strings accepted in js. 
We assume the parsed params are string(value of node) array without dulplicates.

 */
var buildTree = function(inArr, preArr) {
    
    // index by value and it's index in preArr.
    var preHash = {};
    for (var i = 0; i < preArr.length; ++i) {
        preHash[preArr[i]] = i;
    }
    
    // using scope variables:
    //     preHash, inArr
    // in order to prevent too many params parsed into the reculsion.
    var buildSubTree = function(preStart, preEnd, nodeCounter) {
        
        var node = {
            value : inArr[nodeCounter.value]
        };
        // At least start equals end.
        // In this cirstance, there won't be children trees created, but the nodeCounter would be consumed.
        ++nodeCounter.value;
        if (preStart < preEnd) {
            // if there exist left/right nodes remainning(1 node when next start equals next end), do construct(this will consum nodeCounter),
            // otherwise do nothing.
            preStart <= preHash[node.value] - 1 && (node.left = buildSubTree(preStart, preHash[node.value] - 1, nodeCounter));
            preHash[node.value] + 1 <= preEnd && (node.right = buildSubTree(preHash[node.value] + 1, preEnd, nodeCounter));
        }
        return node;
    }
    
    var nodeCounter = {
            value : 0
        },
        root = buildSubTree(0, preArr.length - 1, nodeCounter);
    
    return root;
}


// test case 1
/*
           A
       /      \
      B        C
     / \      /
    D   E    F
   /
  G
*/
var inArr = ["A", "B", "D", "G", "E", "C", "F"],
    preArr = ["G", "D", "B", "E", "A", "F", "C"];
console.log(buildTree(inArr, preArr));