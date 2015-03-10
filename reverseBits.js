//@ sourceURL=reverseBits.js

/**
 *@see https://leetcode.com/problems/reverse-bits/
 */
var reverseBits = function(n) {
    var bit32 = "00000000000000000000000000000000",
        result = [],
        n = n.toString(2);
    for (var i = 31; i >= 0; --i) {
        result[i] = +n[n.length - 32 + i] || bit32[i];
    }
    return parseInt(result.reverse().join(""), 2);
};