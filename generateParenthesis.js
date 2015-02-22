//@ sourceURL=generateParenthesis.js
/**
 *@see https://oj.leetcode.com/problems/generate-parentheses/

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

"((()))", "(()())", "(())()", "()(())", "()()()"

***
 * ideas:

For a given legal string, it's always legal and fullfilling all cases if we just simple add a "()" after each "(" as a new result.
Use a hash to remove dulplicates, there is nothing much to tell about the reculsion.

 */

var generateParenthesis = function(n) {
    
    if (n <= 0) return "";
    return getPar(["()"], n - 1);
}

var addPar = function(str, result) {
    
    result["()" + str] = 1;
    
    for (var i in str) {
        if (str[i] = "(") {
            result[str.substr(0, i) + "()" + str.substr(i)] = 1;
        }
    }
    return result;
}

var getPar = function(arr, n) {
    
    if (!n) return arr;
    
    var result = {},
        origin = [];
    
    for (var i in arr) {
        addPar(arr[i], result);
    }
    
    for (var i in result) {
        origin.push(i);
    }
    
    return getPar(origin, --n);
}