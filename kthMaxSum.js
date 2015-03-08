//@ sourceURL=kthMaxSum.js

/**
 *@see http://www.1point3acres.com/bbs/thread-12610-1-1.html

两个已排序数组A,B。 a是A中的元素，b是B中的元素，求第k大的sum(a+b)。

 *** ideas
 * 

1. in a maxHeap while it's top element is the max sum at the moment that we've found, let's say it's a[i] and b[j].
2. take it out, and push a[i - 1], b[j] (if not existed in the heap) and a[i], b[j - 1] (if not existed) in.
3. repeat 1 to the top elem of the heap, until k elems are pop out from the heap.

 */

/**
 * using maxstack instead of maxheap, 
 *@see maxStackPush.js
 */
var kthMaxSum = function(arr1, arr2, k) {
    
    if (k > p1 + p2 + 2) {
        return arr1[0] + arr2[0];
    }
    
    var p1 = arr1.length - 1, 
        p2 = arr2.length - 1,
        maxStack = [[p1,p2]],
        bufPair,
        counter = 0,
        // used to remove dulplicates.
        existPair = {},
        bufKey;
    
    existPair[p1 + "_" + p2] = true;
    
    var compare = function(a, b) {
        return arr1[a[0]] + arr2[a[1]] >= arr1[b[0]] + arr2[b[1]];
    };
    
    while (maxStack.length && maxStack.length + counter < k) {
        bufPair = maxStack.pop();
        p1 = bufPair[0];
        p2 = bufPair[1];
        
        // XXXXXX should the poped pairs be stored in the non-dulp hash as well?
        // Maybe.
        existPair[p1 + "_" + p2] = false;
        ++counter;
        
        bufKey = p1 - 1 + "_" + p2;
        if (p1 - 1 >= 0 && !existPair[bufKey]) {
            maxStackPush(maxStack, [p1 - 1, p2]);
            existPair[bufKey] = 1;
        }
        
        bufKey = p1 + "_" + (p2 - 1);
        if (p2 - 1 >= 0 && !existPair[bufKey]) {
            maxStackPush(maxStack, [p1, p2 - 1]);
            existPair[bufKey] = 1;
        }
    }
    
    if (!maxStack.length) {
        maxStack.push(bufPair);
    }
    return arr1[maxStack[maxStack.length - 1][0]] + arr2[maxStack[maxStack.length - 1][1]];
}