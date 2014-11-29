//@ sourceURL=candy.js
/**
 * @see https://oj.leetcode.com/problems/candy/
 * 

There are N children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
What is the minimum candies you must give?
 *
 *
 * Some tips about the O(n) solution, not sure if it's working but it does for all those cases that I know.
    Assume the given array is: 1,3,4,5,4,3,9,7,6;
    Set the first child 1 candy;
    Scan the array, let's say the current child is having X candies.
        if the next rate is bigger than the current one, then:
            Specially, if the last rate is also bigger than the current one, then:
                The current child is at a bottom of the line. We'll make sure he is getting 1 candy only, let's set X = 1;
            the next child have X + 1 candies;
        else if smaller, then:
            the next child have X - 1 candies;
        else if equal, then:
            the next child have 1 candy;
    So we get: 1,2,3,<4,3,2>,<2,1,0> for our input. Those elements in "<>" is a reducing sequence, and we get the total number of this queue equals 18 as totalCandies;
    For the first reducing sequence <4,3,2>, let's change it to <4,2,1> so the least element is 1, while the biggest one is still bigger than it's neighbour. We got (3 - 1) * (1 - 2) + 18 = 16 as totalCandies;
        3 - 1 means the count of the number in this reducing sequence is 3, while the first one shouldn't be changed;
        1 - 2 means the least candy should be 1 while that guy is having 2 at the end of the the sequence. Hand it out.
    For the second reducing sequence <2,1,0>, let's simply change it to <3,2,1>. We got 3 * [1 - (0)] + 16 = 19 as totalCandies;
        So at last every child at the end of a reducing sequence is having 1 candy.
    The candy array was changed to 1,2,3,<4,2,1>,<3,2,1> at last.
    Return 19 as the result.
 *
 */

var candy = function(arr) {
    
    // scan the array. Let's assume the first child need 1 candy only.
    var candies = 1,
        lastRate = arr[0],
        lastCandy = 1,
        decreasingCount = 1;
    
    // make sure the last element of the array is always the biggest, so we can trigger the last decreasing count.
    arr.push(Number.POSITIVE_INFINITY);
    
    for (var i = 1, len = arr.length; i < len; ++i) {
        if (arr[i] > lastRate) {
            if (decreasingCount > 1) {
                decreasingCount = lastCandy > 1 ? --decreasingCount : decreasingCount;
                candies += decreasingCount * (1 - lastCandy);
                decreasingCount = 1;
                lastCandy = 1;
            }
            // do not add the "lastCandy" for our last child.
            if (i == len - 1) break;
            ++lastCandy;
        } else if (arr[i] < lastRate) {
            --lastCandy;
            ++decreasingCount;
        } else {
            //[1,2,1,2,1] for [1,2,2,2,1].
            lastCandy = 1;
        }
        
        // just give 1 candy for those at the middle of some nabours that's having the same rate.
        lastRate = arr[i];
        console.log(lastCandy);
        candies += lastCandy;
    }
    
    // remove the appended element.
    arr.pop();
    return candies;
}