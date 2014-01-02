//@ sourceURL=evalRPN.js
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