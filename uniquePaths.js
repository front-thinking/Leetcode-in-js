//@ sourceURL=uniquePaths.js

/**
 *
 *@see https://oj.leetcode.com/problems/unique-paths/
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
 *
 *** ideas:
 
 1. paths(row, column) is having the same result with paths(column, row);
 2. when row == 2 and column >= 2, the robot can turn down at (0, 1, ... column - 1) places and then go right to reach the target.
 3. if a robot is about to go (x, y), he must reach (x - 1, y) or (x, y - 1) first, and then reach target with 1 unique path.
 
 */

var buffer = {};
var uniquePaths = function(row, column) {
    
    var realRow = Math.min(row, column),
        realColumn = Math.max(row, column);
    
    if (realRow <= 0) return 0;
    if (realRow == 1) return 1;
    if (realRow == 2) return realColumn;
 
    return buffer[realRow + "_" + realColumn] || 
        (buffer[realRow + "_" + realColumn] = 
            uniquePaths(realRow - 1, realColumn) 
            + uniquePaths(realRow, realColumn - 1)
        );
}