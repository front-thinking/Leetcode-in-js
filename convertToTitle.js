//@ sourceURL=convertToTitle.js
/**
 * @see https://oj.leetcode.com/problems/excel-sheet-column-title/
 * 
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
 * 
 */
var convertToTitle = function(num) {
    
    /**
    ignore 1 for each 27, so it's 26 bits again.
    for numbers within :
        1~26, do nothing;
        27~52, while it should be 10~1p, let's make it 11~1q so there won't be "0" appearing;
            that is, change into 28~53 (+1).
        do the same for others, make sure it's still a 26 bit number by ignoring every "0"th (27th in digit) number.
    */
    num += ~~((num - 1) / 26);
    
    var str = (~~(+num)).toString(27) + "",
        result = [];
    
    for (var i = 0; str[i]; ++i) {
        result.push((parseInt(str[i], 27) + 9).toString(36).toUpperCase());
    }
    
    return result.join("");
}