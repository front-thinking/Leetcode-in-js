// @ sourceURL=minSubContain.js
/**
 * js的最短摘要问题O(n*m)解法。其中m来自pres的join和match。
 * Find the shortest substring of s that containing all charactors in a given charset pres.
 */
var minSubContain = function(pres, s) {
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