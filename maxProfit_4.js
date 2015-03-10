//@ sourceURL=maxProfit_3.js

/**
 * Best time to buy and sell stock IV.

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most k transactions.

Note:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

 *
 *@see https://oj.leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
 */
var maxProfit = function(k, arr) {
    var buyIndex = 0,
        sellIndex = 0,
        lastIndex = 0,
        profits = [],
        isBuying = 1;
    
    // keep using the method in maxProfit_2, record the benifit each time we make a purchase.
    // then find K max value from all recorded profits.
    
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
    
    // find k max values from the profit array.
    
    // there are 2 ways making it, maxstack, Math.max with hash.
    
    // max stack solution:
    var maxStack = [0],
        bufStack = [],
        profit,
        maxCount = 0;
    
    for (var i = 0; i < profits.length; ++i) {
        while ((profit = profits[i]) > maxStack[maxStack.length - 1]) {
            bufStack.push(maxStack.pop());
        }
        maxStack.push(profit);
        while (bufStack.length && maxCount + maxStack.length < k) {
            maxStack.push(bufStack.pop());
            ++maxCount;
        }
        bufStack = [];
        maxCount = 0;
    }
    
    profit = 0;
    for (var i = 0; i < maxStack.length; ++i) {
        profit += maxStack[i];
    }
    
    return profit;
    
    // For Math.max&hash solution, @see closetPoints.js.
}