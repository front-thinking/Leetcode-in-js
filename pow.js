//@ sourceURL=pow.js

var pow = function(x, y) {
    
    var count = 1,
        result;
    
    if (!x) return 0;
    if (!y) return 1;
    if (y == 1) return x;
    
    result = pow(x, ~~(y / 2));
    result = result * result * pow(x, y % 2);
    return result;
}