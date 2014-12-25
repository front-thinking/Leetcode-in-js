/**
 * Implement a queue with stacks.
 
 * NOT THE BEST SOLUTION!
 
 * O(N) space, O(1) for add, O(sqrt(N)) for get.
 */
var stackToQueue = function() {
    
    var stackArr = [],
        // always +1 at each add, but never reduce. used to calculate the position of new elems.
        addedElems = 0,
        removedElems = 0,
        self = this;
    
    var locate = function(index) {
        /** 
        Let's say, we have 9 elements in total, and now we're trying to add the 10th element.
        This is how it looks:
        A B C G
        5 6 9 F
        2 4 8 E
        1 3 7 D
        
        while the 10th elem should be at the place A.
        size = 4,
        length = 9,
        index = 10,
        sqrOSize = 9.
        
        if the index(eg. the 14th elem) is bigger than 13, (13 - 9) / 4 > 0, then the new elem should be at the last stack;
            otherwise the new elem should be holding A,B or C, for 10, that is (10 - 9) % 4 - 1, at the first stack with index 0.
        */
        
        var size = ~~Math.sqrt(index) + 1,
            sqrOSize = (size - 1) * (size - 1),
            x;
        
        if (index == sqrOSize) {
            x = size - 2;
        } else if (~~((index - sqrOSize) / size)) {
            x = size - 1;
        } else {
            x = ((index - sqrOSize) % size) - 1;
        }
        
        return x;
    }
    
    self.push = function(elem) {
        
        // try to locate the new element, with the expanded length.
        var x = locate(++addedElems);
        
        if (stackArr.length == x) {
            stackArr.push([]);
        }
        
        stackArr[x].push(elem);
        return self.getLength();
    };
    
    self.pop = function() {
        
        if (!self.getLength()) return null;
        
        var x = locate(++removedElems),
            stack = stackArr[x],
            bufferStack = [],
            target;
        
        // always return the last elements from located stack.
        for (var i = 0, len = stack.length; i < len - 1; ++i) {
            bufferStack.push(stack.pop());
        }
        target = stack.pop();
        
        // restore data from buffer
        for (var i = 0, len = bufferStack.length; i < len; ++i) {
            stack.push(bufferStack.pop());
        }
        
        return target;
    };
    
    self.getLength = function() {
        return addedElems - removedElems;
    };
}