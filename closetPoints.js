//@ sourceURL=closetPoints.js

/**
 * Find k closest points to the given point in 2D matrix.
 *
 
Point : 

{
    x : <int>,
    y : <int>
}
 *
 */
var closetPoints = function(arr, point, k) {
    
    var dists = [],
        targetPoint,
        minHash = {},
        maxDist = 0,
        tmpDist = 0;
    
    for (var i in arr) {
        targetPoint = arr[i];
        
        tmpDist = (point.x - targetPoint.x) * (point.x - targetPoint.x) 
            + (point.y - targetPoint.y) * (point.y - targetPoint.y);
        
        dists.push(tmpDist);
        
        if (!minHash[tmpDist]) {
            minHash[tmpDist] = [];
        }
        
        minHash[tmpDist].push(i);
        if (tmpDist > maxDist) {
            maxDist = tmpDist;
        }
    }
    
    var minDist = 0,
        pointCount = 0,
        result = [],
        minIndex = 0;
    
    maxDist = maxDist + 1;
    
    // find k smallest number in array dists,
    // while the index of dists is the same with that in the given arr.
    while (pointCount < k && pointCount < arr.length) {
        minDist = Math.min.apply([], dists);
        minIndex = minHash[minDist].pop();
        result.push(arr[minIndex]);
        
        // prevent dulplicated scanning.
        dists[minIndex] = maxDist;
        
        ++pointCount;
    }
    
    return result;
}

/*
 * Test case:
 *

closetPoints(

[
    {x : 0, y : 0},
    {x : 1, y : 1},
    {x : 1, y : 2},
    {x : 2, y : 1},
    {x : 2, y : 2},
    {x : 2, y : 0},
    {x : 0, y : 2},
    {x : 0, y : 1},
    {x : 1, y : 0}
], 

{x : 3, y : 3}, 

4);

 *
 */