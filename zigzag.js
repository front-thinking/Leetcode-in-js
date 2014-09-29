//@ sourceURL=zigzagConversion.js
/**
 *
he string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 
 *
 *@see https://oj.leetcode.com/problems/zigzag-conversion/
 */
var zigzagConversion = function(str, rows) {
    var zigzag = [],
        x, y, mod,
        circle, odd;
    
    for (var i = 0; i < rows; ++i) {
        zigzag.push([]);
    }
    
    for (var i = 0, c; c = str[i]; ++i) {
        mod = i % (rows - 1);
        
        circle = ~~(i / (rows - 1));
        odd = circle % 2;
        
        // The key point is about to find the correct rules calculating positions of indexes.
        y = odd ? rows - 1 - mod : mod;
        x = odd ? ~~(circle / 2) * (rows - 1) + mod : ~~(circle / 2) * (rows - 1);
        zigzag[y][x] = c;
    }
    
    var result = "";
    
    /*
    var recorder = "";
    */
    for (var i = 0; i < rows; ++i) {
        result += zigzag[i].join("");   
        /*
        recorder = "";
        for (var j = 0, len = zigzag[i].length; j < len; ++j) {
            recorder += (zigzag[i][j] || "-") + " ";
        }
        console.log(recorder);
        */
    }
    
    return result;
}