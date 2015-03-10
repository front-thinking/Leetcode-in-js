//@ sourceURL=halfNum.js
/**
 * @see http://blog.csdn.net/liu1064782986/article/details/7411720
 * @see https://leetcode.com/problems/majority-element/
 * @desription Find a number which appeared in an array for more than the half of its number count.
 *  Drop those unequal pares in each comparation.
 */
var halfNum = function(a) {
    /*
    This magical algorithms is based on the fact that:
    if ALL neighboring numbers are different, the target number would be the last one of the array;
       like [1,x,1,y,1];
    otherwise, there would be a neighboring group of number are the same.
    record keep gainning by 1 if we've keep finding equal groups,
       until we find another unequal pair of data, let's test:
           decrease the record by 1, if record is bigger than 0.
                meanning we've found another pair but it's not the same as the one we've found and counted with record.
                we record the originally found pair by replacing it with current index, until records all comsumed.
           if current recorded number of equal groups is 0, meanning maybe we've found something like this:
                [0,0,0,1,1,1] - the pair of data for 1 comsumed all records gained by 0.
                Drop all records for now then, the target number in the rest of the array appears more than it's half as well.
                So we keep scanning from the next place.
    
    Holy tama lege shit...... I think I thought it out all by myself as I can remember the details drawing the process about exchanging. 
    However I can't recognize all the details about it, so I remark it here for further reviews.
    */
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