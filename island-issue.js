//@ sourceURL=island-issue.js
/**
 *
The city of Codicity is located at the seaside. The city area comprises N plots located along a boulevard on one side of the city. Each plot is flat, but different plots have different heights above the sea level. The relative heights of the consecutive plots are given in the form of a non-empty zero-indexed array A of N integers.
The sea level changes constantly and many plots are sometimes under water. Water levels on consecutive days are given in the form of a non-empty zero-indexed array B of M integers.
A slice of array A is any pair of integers (P, Q) such that 0 ≤ P ≤ Q < N. An island is a slice of consecutive plots that rise above the water’s surface. The plots on either side of each island are under water. More precisely, if the level of the water is K, then an island is a slice (P, Q) in which the level of each plot A[P], A[P + 1], ..., A[Q] is greater than K. Both of the adjacent plots should also be under water; that is:
P = 0 or A[P − 1] ≤ K
Q = N − 1 or A[Q + 1] ≤ K
The goal is to calculate the number of islands on consecutive days.
For example, given the following arrays A and B:
    A[0] = 2    B[0] = 0
    A[1] = 1    B[1] = 1
    A[2] = 3    B[2] = 2
    A[3] = 2    B[3] = 3
    A[4] = 3    B[4] = 1
We have the following number of islands on consecutive days:
on the first day there is only 1 island: (0, 4),
on the second day there are 2 islands: (0, 0) and (2, 4),
on the third day there are 2 islands: (2, 2) and (4, 4),
on the fourth day there aren't any islands,
on the fifth day there are 2 islands: (0, 0) and (2, 4).
Write a function:
class Solution { public int[] solution(int[] A, int[] B); }
that, given a non-empty zero-indexed array A of N integers and a non-empty zero-indexed array B of M integers, returns a sequence consisting of M integers representing the number of islands on consecutive days.
The sequence should be returned as:
a structure Results (in C), or
a vector of integers (in C++), or
a record Results (in Pascal), or
an array of integers (in any other programming language).
For example, given:
    A[0] = 2    B[0] = 0
    A[1] = 1    B[1] = 1
    A[2] = 3    B[2] = 2
    A[3] = 2    B[3] = 3
    A[4] = 3    B[4] = 1
the function should return the array [1, 2, 2, 0, 2], as explained above.
Assume that:
N and M are integers within the range [1..30,000];
each element of array A is an integer within the range [0..100,000];
each element of array B is an integer within the range [0..100,000].
Complexity:
expected worst-case time complexity is O(N+M+max(A)+max(B));
expected worst-case space complexity is O(N+M+max(A)+max(B)), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
 *
 */
function solution(A, B) {
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

// test case
// ([9, 6, 10, 10, 1, 9, 6, 10, 2, 2, 8, 6], [3, 9, 2])
// ([4, 5, 8, 5, 1, 4, 6, 8, 7, 2, 2, 5], [9, 9, 4])
// ([2,1,3,2,3], [0,1,2,3,1])