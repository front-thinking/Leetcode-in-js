// Just some code used to create a random array with given size.
// Would be used for some test cases such as sort.
var creat = function(n) {
    var rlt = [];
    for (var i = 0; i < n; ++i) {
        rlt.push(~~(Math.random() * n));
    }
    return rlt;
}