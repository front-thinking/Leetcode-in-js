//@ sourceURL=stackToQueue.js
/**
 * Implement a queue with stacks.
 * 
 * O(1) for both push and pop.
 * Official solution that's known by all...
 */
var stackToQueue = function() {
    
    var self = this,
        pushStack = [],
        popStack = [];
    
    var checkPopStack = function() {
        if (!popStack.length) {
            for (var i = 0, len = pushStack.length; i < len; ++i) {
                popStack.push(pushStack.pop());
            }
        }
    };
    
    self.push = function(elem) {
        return pushStack.push(elem);
    }
    
    self.pop = function() {
        checkPopStack();
        return popStack.pop();
    }
    
    self.top = function() {
        checkPopStack();
        return popStack[popStack.length - 1];
    }
    
    self.getLength = function() {
        return pushStack.length + popStack.length;
    }
}