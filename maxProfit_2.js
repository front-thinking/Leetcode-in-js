//@ sourceURL=maxProfit_2.js

/**
 * Best time to buy and sell stock II. 
 Say you have an array for which the ith element is the price of a given stock on day i.
 Design an algorithm to find the maximum profit. 
 You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). 
 However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 *
 *@see https://oj.leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 
 *** ideas:

 we're greedy that we follow the rules below:
 1. Record the price at the first day;
 2. If the stock at the current day is having a lower price, record it as the "buyIndex" for purchase;
    If the stock keeps decreasing, always record the last price for purchase;
 3. If the stock starts increase, say having a higher price than our las recorded index, record if as "sellIndex" and prepar to sell;
    If the stock keeps increasing, always record the last price for selling;
 4. Once we've located the buyIndex and the sellIndex, if we find it decreasing again or reaching the end of the array, sell it and add it to our profit.
 
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
            isBuying = 1;
        }
    }
    return profit;
}