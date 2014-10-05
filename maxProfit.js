//@ sourceURL=maxProfit.js

/**
 * Best time to buy and sell stock I. 
 Say you have an array for which the ith element is the price of a given stock on day i.
 If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 *
 *@see https://oj.leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
var maxProfit = function(arr) {
    var buyIndex = 0,
        sellIndex = 0,
        minPrice = Number.NEGATIVE_INFINITY;
    // Find the min price before today, 
    // and then check if the profit is better than the recorded one.
    for (var i = 1, price; price = arr[i]; ++i) {
        if (price <= arr[buyIndex]) {
            buyIndex = i;
            continue;
        }
        if (price - arr[buyIndex] > minPrice) {
            sellIndex = i;
            minPrice = price - arr[buyIndex];
        }
    }
    return minPrice;
}