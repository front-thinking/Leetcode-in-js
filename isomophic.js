//@ sourceURL=isomophic.js
/**
 *
 * From interviews of LinkedIn.
Given two (dictionary) words as Strings, determine if they are isomorphic.
Two words are called isomorphic if the letters in one word can be remapped to get the second word.
Remapping a letter means replacing all occurrences of it with another letter while the ordering of the letters remains unchanged.
No two letters may map to the same letter, but a letter may map to itself.
 Example:
given "foo", "app"; returns true we can map f -> a and o->p
given "bar", "foo"; returns false we can't map both 'a' and 'r' to 'o'
given "ab", "ca"; returns true we can map 'a' -> 'b' and 'c' -> 'a'
 *
 */
var isomophic = function(s1, s2) {
    var matched_1 = {},
        matched_2 = {},
        foundChar_1 = 0,
        foundChar_2 = 0;
    if (s1.length != s2.length) return false;
    for (var i = 0, c_1,c_2; (c_1 = s1[i]) && (c_2 = s2[i]); ++i) {
        if (!matched_1[c_1]) {
            matched_1[c_1] = ++foundChar_1;
        }

        if (!matched_2[c_2]) {
            matched_2[c_2] = ++foundChar_2;
        }

        if (matched_1[c_1] != matched_2[c_2]) return false;
    }
    return true;
}