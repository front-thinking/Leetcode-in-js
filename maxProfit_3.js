//@ sourceURL=maxProfit_3.js

/**
 * Best time to buy and sell stock III. 
 Say you have an array for which the ith element is the price of a given stock on day i.
Design an algorithm to find the maximum profit. You may complete at most two transactions.
Note:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 *
 *@see https://oj.leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
 */
var maxProfit_3 = function(arr) {
    var buyIndex = 0,
        sellIndex = 0,
        lastIndex = 0,
        profits = [],
        isBuying = 1;
    
    // keep using the method in maxProfit_2, record the benifit each time we make a purchase.
    // find 2 max value from all recorded profits.
    
    for (var i = 0, price; (price = arr[i]) !== undefined; ++i) {
        lastIndex = isBuying ? buyIndex : sellIndex;
        // keep looking for the min price before we found a higher price.
        if (price <= arr[lastIndex]) {
            // getProfit as we should sell it in the round we just found.
            if (!isBuying && sellIndex >= buyIndex) {
                //~ profit += arr[sellIndex] - arr[buyIndex];
                profits.push(arr[sellIndex] - arr[buyIndex]);
                buyIndex = sellIndex;
            }
            
            buyIndex = i;
            isBuying = 1;
        } 
        // once we've found a higher price, let's keep looking for a max price before we found another lower one.
        else {
            sellIndex = i;
            isBuying = 0;
        }
        // sell for the last time if still not sold when finished scanning.
        if (!arr[i + 1] && !isBuying) {
            profits.push(arr[sellIndex] - arr[buyIndex]);
            isBuying = 1;
        }
    }
    
    // find 2 max values from the profit array.
    var profit = Math.max.apply(null, profits),
        maxPro = 0,
        // there might be more than 1 max value in the profit array, like :[9,9,8,7].
        maxFound = 0;
    for (var i = 0, rPro; rPro = profits[i]; ++i) {
        // ignore the found max value, if it's the first time found.        
        if (!maxFound && rPro == profit) {
            maxFound = 1;
            continue;
        }
        if (rPro >= maxPro && (rPro != profit || maxFound)) {
            maxPro = rPro;
        }
    }
    return profit + maxPro;
}