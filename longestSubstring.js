//@ sourceURL=longestSubstring.js
/**
 * @see https://oj.leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
Given a string, find the length of the longest substring without repeating characters. 
For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.
 *
 */
var longestSubstring = function(str) {
    var longestRecord = "",
        curChar,
        curRecord = "";
    
    // Based on a simple rule:
    // Before we find a dulplicated charactor, the substring recorded by now must be one without a dulplicated chars.
    // The new calculation should starts from the first place where the dulplicated char appears.
    for (var i = 0, len = str.length; i < len; ++i) {
        curChar = str.charAt(i);
        if (!curRecord.match(curChar)) {
            curRecord += curChar;
        } else {
            curRecord = curRecord.replace(new RegExp("^.*?" + curChar), "");
        }
        if (longestRecord.length <= curRecord.length) {
            longestRecord = curRecord;
        }
    }
    
    return longestRecord;
}