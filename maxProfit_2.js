//@ sourceURL=maxProfit_2.js

/**
 * Best time to buy and sell stock II. 
 Say you have an array for which the ith element is the price of a given stock on day i.
 Design an algorithm to find the maximum profit. 
 You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). 
 However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 *
 *@see https://oj.leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */
var maxProfit_2 = function(arr) {
    var buyIndex = 0,
        sellIndex = 0,
        lastIndex = 0,
        profit = 0,
        isBuying = 1;
    
    for (var i = 0, price; (price = arr[i]) !== undefined; ++i) {
        lastIndex = isBuying ? buyIndex : sellIndex;
        // keep looking for the min price before we found a higher price.
        if (price <= arr[lastIndex]) {
            // getProfit as we should sell it in the round we just found.
            if (!isBuying && sellIndex >= buyIndex) {
                profit += arr[sellIndex] - arr[buyIndex];
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
            profit += arr[sellIndex] - arr[buyIndex];
        }
    }
    return profit;
}