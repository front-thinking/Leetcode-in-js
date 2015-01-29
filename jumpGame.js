//@ sourceURL=jumpGame.js

/**
 * @see https://oj.leetcode.com/problems/jump-game/

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

For example:
A = [2,3,1,1,4], return true.

A = [3,2,1,0,4], return false.

 ***
 * ideas:

Basically, if we can jump to node i + 1, it's obvious that we can reach node i.
So if we figure it out that we can reach i and we can reach i + 1 from i, then we can reach i + i;

We scan from the bottom of the array and try to find the first node K that can reach the end.
If any node in front can reach K, it can reach the end as well.
    If there exist another option in front of K that can reach to the end directly,
    It's obvious that it can reach K as well,
    So we just need to record K as the updated destination.
Find out all latest destinations, return true if we reach the top of the array,
    otherwise return false.

 */

var canJump = function(arr) {
    
    var dist = 0,
        dest = arr.length - 1;
    for (var i = arr.length - 2; i >= 0; --i) {
        dist = dest - i;
        if (arr[i] - dist >= 0) {
            dest = i;
        }
    }
    if (dest == 0) return true;
    return false;
}