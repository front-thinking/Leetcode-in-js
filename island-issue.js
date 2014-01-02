//@ sourceURL=hello.js
function solution(A, B) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var strA = " " + A.join("  ") + " ",
        regHash = {},
        rltHash = {},
        reg = "",
        result = [],
        tmpRlt;
    
    var max = Math.max.apply({}, B);
    for (var i = 0; i <= max; ++i) {
        if (i != 0 ) {
            reg += " | ";
        }
        reg += i;
        regHash[i] = new RegExp(" " + reg + " ", "g");
    }
    
    for (var i = 0, len = B.length; i < len; ++i) {
        tmpRlt = rltHash[B[i]];
        if (!tmpRlt) {
            tmpRlt = strA.replace(regHash[B[i]], "|").replace(/\|+/g, "|").replace(/^\||\|$/g, "");
            if (tmpRlt == "") tmpRlt = 0;
            else {
                tmpRlt = tmpRlt.split("|").length;
            }
        }
        result[i] = rltHash[B[i]] = tmpRlt;
    }
    return result;
}

// ([9, 6, 10, 10, 1, 9, 6, 10, 2, 2, 8, 6], [3, 9, 2])
// ([4, 5, 8, 5, 1, 4, 6, 8, 7, 2, 2, 5], [9, 9, 4])
// ([2,1,3,2,3], [0,1,2,3,1])