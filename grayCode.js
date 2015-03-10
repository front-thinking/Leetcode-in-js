//@ sourceURL=grayCode.js
/**
 * @see http://oj.leetcode.com/problems/gray-code/
 *
The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:

00 - 0
01 - 1
11 - 3
10 - 2
Note:
For a given n, a gray code sequence is not uniquely defined.

For example, [0,2,3,1] is also a valid gray code sequence according to the above definition.

For now, the judge is able to judge based on one instance of gray code sequence. 
 */
var grayCode = function(n) {
    if (n <= 0) return [];
    var rlt = [0,1], rlt2, n = n - 1;
    for (var i = 0; i < n; ++i) {
        // rlt2 is written into result as a reverse.
        rlt2 = rlt.concat();
        for (var j = 0, len = rlt.length; j < len; ++j) {
            rlt[j] = parseInt("0" + rlt[j], 2);
            rlt[len * 2 - j - 1] = parseInt("1" + rlt2[j], 2);
        }
    }
    return rlt;
}

// here comes another genius version... But not from me.
/**
 *
var grayCode = function (n) {
    var ret = [];
    var size = 1 << n;
    for(var i = 0; i < size; ++i)
        ret.push((i >> 1)^i);
    return ret;
}
 */

// Faild.