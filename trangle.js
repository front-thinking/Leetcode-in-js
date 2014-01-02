//@ sourceURL=hello.js
/**
 * @see http://oj.leetcode.com/problems/triangle/
 * 
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:
Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
 *
 */
var trangle = function(arr) {
    var i,j,subA;
    for (i = arr.length - 2, subA; subA = arr[i]; --i) {
        for (j = 0, len = subA.length; j < len; ++j) {
            subA[j] = Math.min(subA[j] + arr[i + 1][j], subA[j] + arr[i + 1][j + 1]);
        }
    }
    return arr[0][0];
}