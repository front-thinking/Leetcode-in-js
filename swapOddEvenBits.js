/**
 *@see http://www.meetcoder.com/problem.php?id=22

22: Swap Odd and Even Bits

Submit: 10  Solved: 10
Description
Write a function to swap odd and even bits in an integer with as few instructions as possible. For example, bit-0 and bit-1 are swapped, bit-2 and bit-3 are swapped, and so on.

Input
The input should be a single non-negative integer x less than 1,000,000,000.

Output
The output should be in the format of Integer.

Sample Input
2
Sample Output
1

 *
 *** ideas
 *
Actually the question is tricky and I cannot confirm the case for 5(101) while I consider (1010) should be returned instead of (011). However I cannot verify it myself as it does not support js.

This is how the code running, for 1011:

a:                  1011
odd :              10110
filter:           101010
odd ->             00010
even :               101
filter for even:   10101
even ->              101
result:            00111

odd = a << 1 makes sure all odd bits would have the value at it's right bit, and
even = a >> 1 makes sure all even bits would have the value at it's left bit. So we've got them bit exchanged.
Filter is used to make sure we only leave odd/even bits for exchanged result.
Get the exchanged result combined and that leads to what we're looking for.
 *
 */
var swapOddEvenBits = function(a) {

    
    var odd = a << 1, even = a >> 1, filter = 0;

    var is1 = 1;
    for (;filter < a || !is1;) {
        filter = filter << 1;
        if (is1) {
            filter = filter | 1;
        }
        is1 = !is1;
    }
    
    odd = odd & filter;
    even = even & (filter >> 1);
    
    return (odd | even);
}