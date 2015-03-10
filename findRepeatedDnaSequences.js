//@ sourceURL=findRepeatedDnaSequences.js

/**
 *@see https://leetcode.com/problems/repeated-dna-sequences/
 */
var findRepeatedDnaSequences = function(seq) {
    if (seq.length <= 10) return [];
    
    var buf,
        hash = {},
        existed = {},
        result = [];
    for (var i = 10, len = seq.length; i < len; ++i) {
        buf = seq.substr(i - 10, 10);
        if (existed[buf]) continue;
        hash[buf] = hash[buf] || 0;
        ++hash[buf];
        if (hash[buf] == 2) {
            result.push(buf);
            existed[buf] = 1;
            delete(hash[buf]);
        }
    }
    return result;
}

// Another solution using bits manipulation, however nothing much changes in javascript.
var findRepeatedDnaSequences = function(seq) {
    if (seq.length <= 10) return [];
    
    var buf = 0,
        i, j,
        // use a length 26 array instead of a hash makes it faster.
        map = [0],
        hash = {},
        result = [];
    
    map["C".charCodeAt(0) - 65] = 1;
    map["G".charCodeAt(0) - 65] = 2;
    map["T".charCodeAt(0) - 65] = 3;
    
    for (i = 10, len = seq.length; i < len; ++i) {
        buf = 1;
        for (j = 0; j < 10; ++j) {
            // 2 bit int for mapped char.
            buf = buf << 2;
            buf = buf | [seq.charCodeAt(i - 10 + j) - 65];
        }
        hash[buf] = hash[buf] || 0;
        ++hash[buf];
        if (hash[buf] == 2) {
            result.push(seq.substr(i - 10, 10));
        }
    }
    
    return result;
}