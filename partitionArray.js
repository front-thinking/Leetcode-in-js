//@ sourceURL=partitionArray.js

/**
 * partition array

Implement  int partition (int a[], int k) so that all a <= k will be in the left side of the array, and a > k will be on the right side. 
And return the position of the first element which is greater than k. Note K might not be in the array.

 *
 *** ideas

This is the partition step of quick sort. In "Introduction to algorithms", there is a very nice implementation and a proof that handles corner cases elegantly.

 *
 */

var partition = function(a, k) {
    var j = -1, i = 0, buf;
    for (;i < a.length; ++i) {
        if (a[i] <= k) {
            // in Java it's just simply swap(A[i],A[++j]);
            j = ++j;
            buf = a[i];
            a[i] = a[j];
            a[j] = buf;
        }
    }
    return a;
}