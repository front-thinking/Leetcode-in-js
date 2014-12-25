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
    
    self.push = function() {
        pushStack.push();
    }
    
    self.pop = function() {
        if (popStack.length) {
            return popStack.pop();
        } else {
            for (var i = 0, len = pushStack.length; i < len; ++i) {
                popStack.push(pushStack.pop());
            }
            return popStack.pop();
        }
    }
    
    self.top = function() {
        return popStack.top();
    }
    
    self.getLength = function() {
        return pushStack.length + popStack.length;
    }
}