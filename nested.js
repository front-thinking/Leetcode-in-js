//@ sourceURL=nested.js
/**
 * Given a nested list of integers, returns the sum of all integers in the list weighted by their depth
 * For example, given the list {{1,1},2,{1,1}} the function should return 10 (four 1's at depth 2, one 2 at depth 1)
 * Given the list {1,{4,{6}}} the function should return 27 (one 1 at depth 1, one 4 at depth 2, and one 6 at depth 3)
 */
var nested = function(arr, depth) {
    var result = 0,
        depth = depth || 1;
    
    for (var i = 0, len = arr.length; i < len; ++i) {
        if (arr[i] instanceof Array) {
            result += nested(arr[i], depth + 1);
            i += arr[i].length;
        } else {
            result += depth * arr[i];
        }
    }
    return result;
}