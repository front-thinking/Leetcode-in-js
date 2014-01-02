//@ sourceURL=evalRPN.js
/**
 * @see http://oj.leetcode.com/problems/evaluate-reverse-polish-notation/

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Some examples:
  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
  
 */
var evalRPN = function(a) {
    var nuStack = [];
    
    for (var i = 0, len = a.length; i < len; ++i) {
        if ((a[i] + "").match(/\d+/)) {
            nuStack.push(a[i]);
        } else {
            nuStack.push(eval(
                nuStack.pop() + a[i] + nuStack.pop())
            );
        }
    }

    return nuStack.pop();
}