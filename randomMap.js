//@ sourceURL=randomMap.js

/**
 *@see http://www.1point3acres.com/bbs/thread-120307-1-1.html
 * implement a map having functions put, get, remove and getRandom. All at the cost of O(1).
 */
var randomMap = function() {
    var hash = {},
        keyArr = [],
        keyIndex = {};
    
    this.put = function(key, value) {
        if (!hash[key]) {
            keyArr.push(key);
            keyIndex[key] = keyArr.length - 1;
        }
        hash[key] = value;
        return true;
    }
    
    this.get = function(key) {
        return hash[key];
    }
    
    this.remove = function(key) {
        if (!hash[key]) return false;
        keyArr[keyIndex[key]] = keyArr[keyArr.length - 1];
        keyArr.length--;
        delete keyIndex[key];
        delete hash[key];
        return true;
    }
    
    this.getRandom = function() {
        return hash[keyArr[~~(Math.random() * keyArr.length)]];
    }
}