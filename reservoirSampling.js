//@ sourceURL=reservoirSampling.js

/**
 * @see http://www.cnblogs.com/buptLizer/archive/2012/04/08/2437416.html

一个长度为N的链表。N很大，但你不知道N有多大。你的任务是从这N个元素中随机取出k个元素。你只能遍历这个链表一次。你的算法必须保证取出的元素恰好有k个，且它们是完全随机的（出现概率均等）

 */

var reservoirSampling = function(arr, k) {
    
    var result = [],
        rand = 0;
    
    for (var i in arr) {
        if (result.length < k) {
            result.push(arr[i]);
        } else {
            // ranges from 0 ~ i - 1,
            // here i >= k;
            rand = ~~(Math.random() * i);
            // if located between k + 1 and i, do nothing;
            // otherwise replace the value at that place.
            
            // that is, if the rand generated is within 0 ~ k - 1
            if (k >= rand + 1) {
                result[rand] = arr[i];
            }
        }
    }
    
    return result;
}