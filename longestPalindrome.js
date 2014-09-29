//@ sourceURL=longestPalindrome.js
/**
 *
Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
 *
 *@see https://oj.leetcode.com/problems/longest-palindromic-substring/
 */
var longestPalindrome = function(s) {
    var s = s.split("").join("|"),
        preS = "", 
        preLen = 0,
        // expanding raduis.
        halfLen = 0,
    
        // result recorder
        maxIndex = 0, 
        maxLen = 0,
        i;
    
    // Had some problems thinking of the logic of halfLen...
    // Got stuck on it for a long time, about how much chars should be calculated.
    for (i = 0, len = s.length; i < len;) {
        halfLen = 0;
        preLen = preS.length;
        while (halfLen <= preLen && halfLen + i <= len && preS.substr(0, halfLen + 1) == s.substr(i + 1, halfLen + 1)) {
            ++ halfLen;
            if (halfLen >= maxLen) {
                maxLen = halfLen;
                maxIndex = i;
            }
        }
        
        preS = s.substr(i, halfLen || 1).split("").reverse().join("") + preS;
        // Key point is, when only 1 matched char found, that's totally the same as nothing found.
        // We'll still need to count from the found place.
        // Let's say, for a | b | a, when i is 2 (b), 
        // halfLen whould be found as 1, 
        // And the next i should be 3 (|).
        i += halfLen || 1;
    }
    
    // Gererate result.
    // Magic...
    preS = s.substr(maxIndex, maxLen + 1);
    preS = preS.substr(1).split("").reverse().join("") + preS;
    preS = preS.replace(/\|/g, "");
    return preS;
}