//@ sourceURL=hello.js
var getPal;
var counter = 0;
(function() {

var mergeS = function(s, arr) {
    var rst = [];
    for (var i = 0, a; a = arr[i]; ++i) {
        rst.push([s].concat(a));
        ++counter;
    }
    return rst;
};

var buf = {};
var isPal = function(s) {
    ++counter;
    if (buf[s]) return buf[s];
    return (buf[s] = (s.split("").reverse().join("") == s));
};

var gBuf = {};
getPal = function(s) {
    
    if (gBuf[s]) return gBuf[s];
    
    var srlt = [], tmps;
    if (isPal(s)) srlt.push([s]);
    if (s.length <= 1) {
        return srlt;
    }
    for (var i = 1, len = s.length; i < len; ++i) {
        tmps = s.substr(0, i);
        if (isPal(tmps)) {
            srlt = srlt.concat(mergeS(tmps, getPal(s.substr(i, len))));
        }
    }
    return gBuf[s] = srlt;
};

})();