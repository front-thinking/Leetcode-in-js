//@ sourceURL=reverse.js
/**
 * 
Reverse a string word by word and there may be multiple whitespace between two word, keep exactly the same whitespace when reverse string by word;
 *
 */
var reverseSen = function(str) {
    
    // for no-space required case:
    // return str.split(/\s+/).reverse().join(" ");
    
    var matchs = str.match(/\s+/g).reverse(),
        words = str.split(/\s+/g).reverse();
        result = [];
    
    for (var i = 0, len = words.length;  i< len; ++i) {
        result.push(words[i]);
        matchs[i] && result.push(matchs[i]);
    }
    return result.join("");
}

/**
 * reverse all words in a sentence, but keep their positions. Also the spaces kept.
 */
var reverseWord = function(str) {
    
    // for no-space required case:
    // return ([].slice.call(str)).reverse().join("").split(/\s+/).reverse().join(" ");
    return reverseSen(([].slice.call(str)).reverse().join(""));
}
