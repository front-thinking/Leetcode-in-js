//@ sourceURL=minPath.js

/**
 * 

Given a n*m matrix, each cell has a value of either 0 or 1. A cell indicates a wall if its value is 1. 
Give the length of the shortest path from M[0][0] to M[n-1][m-1]. You can move either up, down, left or right.

 *
 *** ideas

Nothing much to tell, just do the move reculsively.
Let me know if there exist any better solution.

 *
 */

var minPath = function(m) {
    
    var d = [],
        i = m.length, 
        j = m[0].length,
        maxValue = m.length * j;
    
    for (var k in m) {
        d[k] = [];
    }
    d[i - 1][j - 1] = 0;
    
    var getPath = function(x, y, distance) {
        if (i <= x || j <= y || x < 0 || y < 0 || m[x][y]) return maxValue;
        
        if (d[x][y] === undefined) d[x][y] = maxValue;
        
        if (d[x][y] < distance) {
            return d[x][y];
        } else {
            d[x][y] = distance;
        }
        
        ++counter;
        
        getPath(x + 1, y, d[x][y] + 1);
        getPath(x, y + 1, d[x][y] + 1); 
        getPath(x - 1, y, d[x][y] + 1); 
        getPath(x, y - 1, d[x][y] + 1);
    }
    
    getPath(i - 1, j - 1, 0);
    return d[0][0] || -1;
}

/**

minPath([
    [0,1,0,0,0,0,0],
    [0,1,0,0,0,0,0],
    [0,1,0,0,1,0,0],
    [0,0,0,1,0,0,0],
    [0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0],
    [0,0,1,0,0,0,0],
]); // 16

minpath tagged with # for the test case above:
[
    [#,1,0,0,0,0,0],
    [#,1,#,#,#,#,#],
    [#,1,#,0,1,0,#],
    [#,#,#,1,0,0,#],
    [0,1,0,1,0,1,#],
    [0,1,0,1,0,1,#],
    [0,0,1,0,0,0,#],
]
*/