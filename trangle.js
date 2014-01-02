//@ sourceURL=hello.js
var trangle = function(arr) {
    var i,j,subA;
    for (i = arr.length - 2, subA; subA = arr[i]; --i) {
        for (j = 0, len = subA.length; j < len; ++j) {
            subA[j] = Math.min(subA[j] + arr[i + 1][j], subA[j] + arr[i + 1][j + 1]);
        }
    }
    return arr[0][0];
}