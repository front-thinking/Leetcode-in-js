//@ sourceURL=maxStackPush.js

/**
 * Simple max stack.

Add new value to the sorted stack and keep the stack sorted.

 *@param compare {Function}
    For min stack usage, set compare with:
    function(a, b) {
        return a <= b;
    }
 */
var maxStackPush = function(stack, value, compare) {
    
    var bufStack = [],
        buf;
    
    compare = compare || function(a, b) {
        return a >= b;
    }
    
    while (compare(buf = stack.pop(), value) && buf) {
        bufStack.push(buf);
    }
    buf !== undefined && stack.push(buf);
    stack.push(value);
    while (bufStack.length) {
        stack.push(bufStack.pop());
    }
    return stack;
}