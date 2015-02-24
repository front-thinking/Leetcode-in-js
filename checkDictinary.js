//@ sourceURL=checkDictionary.js
/**
 *
 *@see http://www.1point3acres.com/bbs/forum.php?mod=viewthread&tid=118605&extra=page%3D1%26filter%3Dsortid%26sortid%3D311%26sortid%3D311
 *
我有一个输入字符，然后我有一个英文字典，说白了就是字符串数组，然后写一个function返回字典里拥有输入字符串里所有字母(非数字或者空格等符号，就是纯字母)的最短的那个字符串。举个例子：
输入字符串"SR 456 T"，字符串数组里有"SORT"，而且是最短的，那么就返回它。
字母可以是无序的，比如“SR 456 T”的话，字典里有“ARTS”也是可以的。
 *
 ***Ideas:
 *
 * I'm recording this question as there is a beautiful solution with regexp, nearly constant space and O(N) time.
 *

For the case "SR 456 T" while SORT in dictionary,
We should change the string into SRT without any other useless letters, and remove dulplicates.
Then for each word in the dictionary, if we can find exactly EVERY letter in the given string from that word, that would be a match.
In this case, we should take care of the case with regexp like this:

"SRT".match(/[S|O|R|T]{3}/i);

We're ignoring orders of the given string using regexp.

 *
 */

var checkDictionary = function(str, dictionary) {
    var str = str.replace(/\W/ig, "");
    
    // Here we do not sort the dictionary. As it's could be easier if we find all matches and them pickup the shortest one.
    
    // Let's imagine there could be dulplicated letters in str, so we should take care of that.
    var charHash = {},
        newStr = [];
    for (var i in str) {
        if (!charHash[i]) {
            charHash[i] = 1;
            newStr.push(charHash[i]);
        }
    }
    newStr = newStr.join("");
    
    // Here comes the magic.
    var matches = [],
        reg;
    for (var i in dictionary) {
        
        reg = new RegExp("[" + dictionary[i].join("|") + "]{" + newStr.length + "}", "i");
        if (newStr.match(reg)) {
            matches.push(dictionary[i]);
        }
    }
    
    // find the shortest one.
    var minLen = Number.POSITIVE_INFINITY,
        result;
    for (var i in matches) {
        if (matches[i].length < minLen) {
            minLen = matches[i].length;
            result = matches[i];
        }
    }
    
    return result;
}