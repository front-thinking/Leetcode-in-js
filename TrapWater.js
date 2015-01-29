//@ sourceURL=trapWater.js

/**
 *@see https://oj.leetcode.com/problems/trapping-rain-water/

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

 ***
 * ideas:

Basically, the capacity is always affected by the second largest number, so we record it for calculating.
When we're scanning through the array, let's say we found arr[i] at left smaller than arr[j] at right, the capacity would be:
    Let's assume there is no more numbers in the array, then capacity should be:
        C = (j - i - 1) * arr[i]; // Math.min(arr[i], arr[j])
    Here we find the second largest number as "i" and record it into "R".
    For the next scan we have i move forward to "i + 1", trying to find another element that's bigger than "j" so we always keep tracking the second biggest number.
    Here we got the capacity updated following rules:
        C = C - palce taken by element a[i + 1];
        if arr[i + 1] is bigger than "R", remember arr[j] is bigger than R as well, so here we found a bigger container and should expand our capacity, 
        adding extra spaces not including those places added in the first round(calculated with R)
            C = C + (Math.min(arr[i + 1], arr[j]) - R) * (j - (i + 1) - 1)
    Keep going until the left pointer meets the right one. Thus we finish scanning the whole array.

 *
 */
var trapWater = function(arr) {
    
    var left = 0, 
        right = arr.length - 1,
        capacity = 0, 
        // record the second biggest number scanned for now.
        record = 0;
    
    while (left != right) {
        if (arr[left] < arr[right]) {
            capacity = Math.max(capacity - Math.min(arr[left], record), 0);
            if (arr[left] > record) {
                capacity += (arr[left] - record) * (right - left - 1);
            }
            // arr[right] is bigger than arr[left], 
            // so here record is always the second largest number.
            record = Math.max(record, arr[left]);
            ++left;
        } else {
            capacity = Math.max(capacity - Math.min(arr[right], record), 0);
            if (arr[right] > record) {
                capacity += (arr[right] - record) * (right - left - 1);
            }
            record = Math.max(record, arr[right]);
            --right;
        }
    }
    
    return capacity;
}

// trapWater([0,1,0,2,1,0,1,3,2,1,2,1])
// trapWater([2,5,1,2,3,4,7,7,6])
// trapWater([2,5,1,3,1,2,1,7,7,6])
// trapWater([6,1,4,6,7,5,1,6,4])