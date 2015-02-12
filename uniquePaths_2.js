//@ sourceURL=uniquePaths.js

/**
 *
 *@see https://oj.leetcode.com/problems/unique-paths-ii/
Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.

Note: m and n will be at most 100.
 *
 *** ideas:
 
 1. If a robot is about to go (x, y), he must reach (x - 1, y) or (x, y - 1) first, and then reach target with 1 unique path.
    so the dp[x][y] = dp[x - 1][y] + dp[x][y + 1].
 2. Initially, when x = 1 or y = 1, dp[x][y] should always be 1 as there could only be 1 path.
 3. For those points that can't be reached (having value of 1), there is 0 path to it.
 
 */

var uniquePaths = function(matrix) {
    
    var row, col;
    
    for (row = 0; matrix[row]; ++row) {
        for (col = 0, len = matrix[row].length; col < len; ++col) {
            if (!row || !col) {
                matrix[row][col] = 1;
            } else {
                if (matrix[row][col]) {
                    matrix[row][col] = 0;
                } else {
                    matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1];
                }
            }
        }
    }
    
    return matrix[row - 1][col - 1];
}