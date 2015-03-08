//@ sourceURL=anagrams.js

/**
 *@see http://www.lintcode.com/en/problem/anagrams/

Given an array of strings, return all groups of strings that are anagrams.

Note
All inputs will be in lower-case

Example
Given a string list: ["lint","intl","inlt","code"]

return ["lint","inlt","intl"]

 *** ideas
 * 

Using a length 26 array doing the checking, recording chars with repeats,
With the index calculated from charcode.
For word "aab" and "aba", they would be all recorded like this in the array:

["aa", "b", undefined * 24].

 * 
 */
var anagrams = function(arr) {
    
    // arr[26].
    var map = [],
        i, j,
        charCode,
        hash = {};
    
    for (i = 0; i < arr.length; ++i) {
        map = [];
        arr[i] = arr[i].toLowerCase();
        for (j = 0; j < arr[i].length; ++j) {
            charCode = parseInt(arr[i][j], 36) - 10;
            //~ charCode = arr[i][j].charCodeAt(0) - 97;
            map[charCode] = map[charCode] || "";
            map[charCode] += arr[i][j];
        }
        charCode = map.join("");
        hash[charCode] = hash[charCode] || [];
        hash[charCode].push(arr[i]);
    }
    
    var result = [];
    for (var i in hash) {
        if (hash[i].length > 1) {
            result.push(hash[i]);
        }
    }
    
    return result;
}