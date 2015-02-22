/**
 *@see http://www.meetcoder.com/problem.php?id=8

Find Last Non-Zero Digit of Factorial
Description
You are given a non-negative integer N, find the last non-zero digit of N!.

Input
The input should be a non-negative integer N less than or equal to 1,000,000.

Output
The output should be the last non-zero digit of N!.

Sample Input
5
Sample Output
2

***ideas
 * as we're looking for the last digit, it's obviouse that, for example:

12 * 24 is having the same "last digit" as 2 * 24.
Further more, if we're looking for "the last but one digit", 
312 * 24 is having the same "last but one digit" as 12 * 24.

This rule can be expanded to all other cases.

 */
var lastDigit = function(n) {
    if (n <= 0) return 0;
    var result = 1;
    for (var i = 1; i <=n; ++i) {
        result = result * i;
        result = (result + "").replace(/0+$/, "").replace(/\d+(\d{3})/, "$1") - 0;
    }
    result = result + "";
    return +result[result.length - 1];
}