//@ sourceURL=permutations.js
var mergeArray = function(arr, value) {
    for (var i = 0, len = arr.length; i < len; ++i) {
        arr.push(arr[i].concat());
        arr[len + i].push(value);
    }
}
var comb = function(arr) {
    var result = [[]];
    for (var i = 0, len = arr.length; i < len; ++i) {
        mergeArray(result, arr[i]);
    }
    return result;
}