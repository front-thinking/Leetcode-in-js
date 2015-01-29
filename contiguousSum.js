/**
 *
 * Given an unsorted array A and a target number n, return true if there exist a contiguous sub sequence in A that sum up to n.
 * 
 */
var contiguousSum = function(arr, target) {
    
    var sumArr = [0],
        sumHash = {},
        sum = 0;
    
    /**
        sumArr[i] is arr[0] + arr[1] + ... + arr[i],
        
        so for i, j (i < j), arr[i] + arr[i + 1] + ... + a[j] = sumArr[j] - sumArr[i];
        
        we're trying to find i, j (i < j) such that a[i] + ... + a[j] = target, in this case:
            target = sumArr[j] - sumArr[i],
        and 
            sumArr[j] = target + sumArr[i];
    */
    
    sumHash[target] = 0;
    for (var i in arr) {
        sum = sumArr[sumArr.length - 1] + arr[i];
        sumArr.push(sum);
        sumHash[sum + target] = +i + 1;
    }
    
    // if k = sumHash[sumArr[i]] defined, that means:
    // sumArr[i] = sumArr[k] + target,
    // k < i.
    for (var i in sumArr) {
        if ((sumHash[sumArr[i]] >= 0) && sumHash[sumArr[i]] < i) {
            return true;
        }
    }
    
    return false;
}