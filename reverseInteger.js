//@ sourceURL=reverseInteger.js
/**
 * 
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

 *
 *@see https://oj.leetcode.com/problems/reverse-integer/
 *
 */
var reverseInteger = function(value) {
    var bufStr = value.toString()
        symbol = bufStr.match(/^-/);
    symbol = symbol || "";
    return +(symbol + bufStr.replace(/\D/, "").split("").reverse().join(""));
}