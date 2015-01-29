//@ sourceURL=slideWindow.js

/**
 * @see http://www.mitbbssg.com/article_t/JobHunting/32877233.html

Write a function that is given an array of integers. It should return true 
if and only if there are two distinct indices i and j into the array such 
that the difference between arr[i] and arr[j] is at most l and the 
difference between i and j is at most k.

 */

var slideWindow = function(arr, l, k) {
    
    var bufArr = [],
        diff = 0;
    
    for (var i in arr) {
        bufArr.push(arr[i]);
        // k elements at most in bufArr.
        if (bufArr.length > k) {
            bufArr.shift();
        }
        diff = Math.max.apply([], bufArr) - Math.min.apply([], bufArr);
        if (diff && (diff <= l)) {
            return true;
        }
    }
    return false;
}