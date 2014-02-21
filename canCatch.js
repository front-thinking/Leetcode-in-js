//@ sourceURL=canCatch.js
var canCatch;
(function() {
var oulaBuf = {};
var oula = function(n) {
    var result = 0;
    if (oulaBuf[n - 1]) {
        result = oulaBuf[n - 1] + 1/n;
    } else {
        for (var i = 1; i <= n; ++i) {
            result += 1/i;
        }
    }
    return oulaBuf[n] = result;;
}
/**
 * @param range: 0-1, 1 inch = range mile.
 */
var jump = function(jumpCount, range){
    //  inchToMile = range;
    var position = range * oula(jumpCount);
    return position * jumpCount;
}

canCatch = function(range) {
    var position = -1,
        jumpCount = 0;
    // max int in js: 9007199254740990
    while (position < jumpCount && jumpCount <= 9007199254740990) {
        position = jump(++jumpCount, range);
    }
    // unreachable!
    if (jumpCount >= 9007199254740990) return -1;
    return jumpCount;
}
})();