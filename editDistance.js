//@ sourceURL=halfNum.js
// DP for editDistance.
var editDistance = function(a, b) {
    var d = [];
    for (var i = 0, leni = a.length; i <= leni; ++i) {
        !d[0] && (d[0] = []);
        d[0][i] = i;
    }
    for (var i = 0, leni = b.length; i <= leni; ++i) {
        !d[i] && (d[i] = []);
        d[i][0] = i;
    }
    var i, j, ij, leni, lenj;
    for (i = 1, leni = a.length; i <= leni; ++i) {
        for (j = 1, lenj = b.length; j <= lenj; ++j) {
            ij = (a.charAt(i) == b.charAt(j) ? 0 : 1);
            d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + ij);
        }
    }
    return d;
}