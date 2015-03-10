//@sourceURL=rotateArray.js

/**
 * @see https://oj.leetcode.com/problems/rotate-array/

Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

Hint:
Could you do it in-place with O(1) extra space?

 */

/**
 * Solution 1.
 */
var rotateArray = function(arr, k) {
    return arr.splice(arr.length - k, k).concat(arr);
}

/**
 * Solution 2 using reverse.
 */
var rotateArray = function(arr, k) {
    
    var subReverse = function(arr, start, end) {
        var buf = 0;
        while (start < end) {
            buf = arr[start];
            arr[start] = arr[end];
            arr[end] = buf;
            ++start;
            --end;
        }
    }
    k = k % arr.length;
    arr.reverse();
    subReverse(arr, 0, k - 1);
    subReverse(arr, k, arr.length - 1);
    
    return arr;
}

/**
 * Solution 3 by inline replace.
 */
var rotateArray = function(arr, k) {
    
    // +1 index when loopback.
    var counter = 0,
        index = 0,
        nextIndex = 0,
        startIndex,
        buf,
        nextBuf,
        loopBuf;
    
    if (k <= 0 || k >= arr.length) return arr;
    
    while (counter < k) {
        
        // To be continued.
    }
    
    return arr;
}