//@ sourceURL=slidingWindowMin.js;

/**
 * @see http://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=120184&extra=page%3D1%26filter%3Dsortid%26sortid%3D311%26sortid%3D311

Sliding Window （给你一个数组和一个数k，k是滑动窗口的大小，滑动窗口每次向右移动一个index，输出是一个新的数组，记录每次窗口里的最小值）
example: [1, 2, 5, 10, 3, 4], output should be: [1, 2, 3, 3]

 ***
 * ideas:

used the the tricky array in javascript that can be used as a stack also queue.
Keeping a minQueue that records all the min values as a stack, and shift the first element once it runs out of the window.

 */
var slidingWindowMin = function(arr, k) {
    var p = k,
        result = [],
        // length of K
        minQueue = [arr[0]];
    
    for (var i = 1; i < arr.length; ++i) {
        while (minQueue[minQueue.length - 1] >= arr[i]) {
            minQueue.pop();
        }
        minQueue.push(arr[i]);
        
        if (i >= k - 1) {
            if (arr[i - k + 1] == minQueue[0]) {
                result.push(minQueue.shift());
            } else {
                result.push(minQueue[0]);
            }
            
        }
    }
    
    return result;
}