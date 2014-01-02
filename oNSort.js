//@ sourceURL=sort.js
// for max num smaller than 100,000;
// Bigger size issue : multi array with offset.
var sort = function(arr) {
    var obj = new Array(Math.max.apply({}, arr)), i, j, num, len;
    for (i = 0, len = arr.length; i < len; ++i) {
        num = arr[i];
        obj[num] = (obj[num] || 0) + 1;
    }
    len = 0;
    for (i in obj) {
        for (j = 0; j < obj[i]; ++j) {
            arr[len] = i;
            ++len;
        }
    }
    return arr;
}