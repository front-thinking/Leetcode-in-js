//@ sourceURL=halfNum.js
var halfNum = function(a) {
    var last, next, record = 0;
    for (last = 0, next = 1; a[next] != undefined; ++next) {
        if (a[last] != a[next]) {
            --last;
            if (record <= 0) {
                last = next = next + 1;
            } else {
                a[last] = a[last] ^ a[next];
                a[next] = a[last] ^ a[next];
                a[last] = a[last] ^ a[next];
                last = next;
                --record;
            }
        } else {
            last = next;
            ++record;
        }
    }
    return a[last];
}