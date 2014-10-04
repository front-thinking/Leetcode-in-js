// @ sourceURL=minWindow.js
/**
 * js的最短摘要问题O(n*m)解法。其中m来自pres的join和match。
 * 妈的竟然之前已经做过一次了。。。。。。
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
 *@see https://oj.leetcode.com/problems/minimum-window-substring/
 *
 */
var minWindow = function(pres, s) {
    var matched = [],
        preIndexed = {},
        i, c,
        minLen = s.length,
        minStart = 0,
        newLen,
        newStart;

    for (i = 0, c; c = pres[i]; ++i) {
        preIndexed[c] = i + 1;
    }
    for (i = 0, c; c = s[i]; ++i) {
        if (preIndexed[c]) {
            // always update the last index found.
            matched[preIndexed[c] - 1] = i + 1;
            // found all.
            if (matched.length == pres.length && !matched.join(",").match(/(^0,|,0,|,0$)/)) {
                newStart = Math.min.apply(Math, matched) - 1;
                newLen = Math.max.apply(Math, matched) - newStart - 1;
                if (newLen <= minLen) {
                    minLen = newLen;
                    minStart = newStart;
                }
            }
        }
    }
    return s.substr(minStart, minLen + 1);
}