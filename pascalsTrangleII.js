//@ sourceURL=pascalsTrangleII.js
/**
 *@see http://oj.leetcode.com/problems/pascals-triangle-ii/
 *
Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?
 *
 */
// O(K) + O(K)
function pascalsTrangle(row) {
    // set row = row + 1, thr row number starts from 0.
    var row = row + 1, result = [1];
    // C(row,k), k = ~~row/2;
    // for example for row = 6,
    // [1, 6, 15, 20, 15, 6, 1],
    // 20 = C(6,3) = 6*5*4/1*2*3
    // 15 = C(6,2) = 6*5/1*2
    for(var i = 1; i < row / 2; i++) {
        result.push(~~(result[i - 1] * (row - i) / i));
    }
    // return result.pop(); // maxnum for given row
    for (var len = result.length, i = len; i < row; ++i) {
        result.push(result[row - i - 1]);
    }
    return result;
};