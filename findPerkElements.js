//@ sourceURL=findPeakElement.js

/**
 *@see https://leetcode.com/problems/find-peak-element/
 */
var findPeakElement = function(num){
    
    if (!num.length) return -1;
    
    var growing = 1;
    
    for (var i = 1; i < num.length; ++i) {
        if (growing && num[i] < num[i - 1]) {
            return i - 1;
        }
        if (num[i] > num[i - 1]) {
            growing = 1;
        } else {
            growing = 0;
        }
    }
    
    return num.length - 1;
};