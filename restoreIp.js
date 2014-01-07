//@ sourceURL=restoreIPa.js
/**
 * not a wise solution but it works.
 * @see http://oj.leetcode.com/problems/restore-ip-addresses/
 *
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

For example:
Given "25525511135",

return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
 *
 * @run restoreIP("25525511135",4);
 */
var restoreIP;

(function() {

restoreIP = function(str, cnt) {
    if (str.length > cnt * 3 || str.lengt < cnt || cnt <= 0) return false;
    var merged = [], result, tmp, tmpArr;
    for (var i = -1; i >= -3; --i) {
        result = [];
        tmp = parseInt(str.slice(i));
        if (tmp > 255) continue;
        if (str.substr(0, str.length + i).length == 0){
            tmpArr = [];
        } else {
            tmpArr = restoreIP(str.substr(0, str.length + i), cnt - 1);
        }
        if (tmpArr) result = mergeArr(tmp, tmpArr);
        else continue;
        merged.push(result);
    }
    return merged.length ? merged : false;
};
var mergeArr = function(val, arr) {
    if (arr.length) {
        if (arr[0] instanceof Array) {
            for (var i = 0, len = arr.length; i < len; ++i) {
                arr[i].unshift(val);
            }
        } else {
            arr.unshift(val);
        }
    } else {
        arr = [val];
    }
    return (arr[0] instanceof Array && arr.length == 1) ? arr[0] : arr;
};

})();