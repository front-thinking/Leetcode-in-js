//@ sourceURL=maxSum.js

var maxSum = function(arr) {
    var max = 0,
        sum = 0;
    
    for (var i in arr) {
        sum += arr[i];
        if (sum <= 0) {
            sum = 0;
        } else {
            if (sum >= max) {
                max = sum;
            }
        }
    }
    return max;
}