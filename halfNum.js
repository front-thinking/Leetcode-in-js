//@ sourceURL=halfNum.js
/**
 * @see http://blog.csdn.net/liu1064782986/article/details/7411720
 * @desription Find a number which appeared in an array for more than the half of its number count.
 *  Drop those unequal pares in each comparation.
 */
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