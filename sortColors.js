//@ sourceURL=sortColors.js

/**
 * sort colors
 * @see https://oj.leetcode.com/problems/sort-colors/
 
Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.

click to show follow up.

Follow up:
A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

Could you come up with an one-pass algorithm using only constant space?

 *** Nothing much to tell about.
 * While in solution 2, we do not care about dulplicated swaps.
 */
var sortColor = function(arr) {
    var redCount = 0,
        greCount = 0;
    
    for (var i in arr) {
        if (arr[i] == 0) ++redCount;
        if (arr[i] == 1) ++greCount;
    }
    
    for (var i in arr) {
        if (redCount) {
            arr[i] = 0;
            --redCount;
        } else if (greCount){
            arr[i] = 1;
            --greCount;            
        } else {
            arr[i] = 2;
        }
    }
    return arr;
}

// Solution 2.
var sortColor_2 = function(arr) {
    var len = arr.length,
        last0 = 0,
        first2 = len - 1;
    
    var buf;
    for (var i = 0; i < len; ++i) {
        if (arr[i] == 0) {
            buf = arr[i];
            arr[i] = arr[last0];
            arr[last0] = buf;
            last0++;
        } else if (arr[i] == 2 && i < first2) {
            buf = arr[i];
            arr[i] = arr[first2];
            arr[first2] = buf;
            first2--;
            i--;
        }
    }
    
    return arr;
}