//@ sourceURL=minWindow15.js

/**
 *@see https://oj.leetcode.com/problems/minimum-window-substring/
 *
 * A solution that's not that wise enough I think. 
 *
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

For example,
S = "ADOBECODEBANC"
T = "ABC"
Minimum window is "BANC".

Note:
If there is no such window in S that covers all characters in T, return the emtpy string "".

If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
 *
 */
var minWindow = function(s, t) {
    var windowArr = [],
        windowHash = [],
        tIndexHash = {},
        matchC,
        matched = "",
        minCount = s.length,
        minCountIndex;
    
    for (var i in t) {
        tIndexHash[t[i]] = i;
    }
    
    windowHash.length = t.length;
    
    for (var i = 0, len = s.length; i < len; ++i) {
        matchC = t.match(s[i]);
        if (matchC) {
            matchC = matchC[0];
            matched = matched.replace(matchC, "") + matchC;
            windowHash[tIndexHash[s[i]]] = i;
        }
        // find a window already
        if (matched.length == t.length) {
            windowArr.push([Math.min.apply({}, windowHash), Math.max.apply({}, windowHash)]);
            windowHash = [];
            windowHash.length = t.length;
            matched = "";
            
            // How can this be optimized?
            i = windowArr[windowArr.length - 1][0] + 1;
        }
    }
    
    if (!windowArr.length) {
        return "";
    }
    
    for (var i in windowArr) {
        minCount = Math.min(minCount, windowArr[i][1] - windowArr[i][0]);
        if (minCount == windowArr[i][1] - windowArr[i][0]) {
            minCountIndex = i;
        }
    }
    return s.substring(windowArr[minCountIndex][0], windowArr[minCountIndex][1] + 1);
}