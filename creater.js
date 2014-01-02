var creat = function(n) {
    var rlt = [];
    for (var i = 0; i < n; ++i) {
        rlt.push(~~(Math.random() * n));
    }
    return rlt;
}