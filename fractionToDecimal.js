//@ sourceURL=fractionToDecimal.js
/**
 *@see https://oj.leetcode.com/problems/fraction-to-recurring-decimal/
 *

Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

For example,

Given numerator = 1, denominator = 2, return "0.5".
Given numerator = 2, denominator = 1, return "2".
Given numerator = 2, denominator = 3, return "0.(6)".

 **
 * Nothing much to tell about this. Got stuck on 10/11 for a while.
 * Actually... there might be problems for 10/11 and 1/11, while they're not having the same results. Who knows.
 *
 */
var fractionToDecimal = function(numerator, denominator) {
    // indexed by numerators, valued by a number that tells the first place the key appears as a numerator.
    var hash = {},
        result = [],
        // let's just return if the sequence is too long while still no repeat found.
        maxNumCount = 100;
        
    while (numerator && !hash[numerator] && result.length <= maxNumCount) {
        while (numerator < denominator) {
            hash[numerator] = result.length;
            result.push(0);
            numerator *= 10;
        }
        
        hash[numerator] = result.length;
        
        result.push(~~(numerator / denominator));
        numerator = numerator % denominator * 10;
    }
    
    // repeat found
    if (hash[numerator]) {
        result[hash[numerator]] = "(" + result[hash[numerator]];
        result.push(")");
    }
    
    if (result[0] == 0) {
        result[0] = "0.";
    }
    return result.join("");
}