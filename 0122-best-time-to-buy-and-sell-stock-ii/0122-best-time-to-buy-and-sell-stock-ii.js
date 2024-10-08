/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity
    let maxProfit = 0
    
    for (let i = 0; i < prices.length; i++) {
        if (minPrice > prices[i]) {
            minPrice = prices[i]
        } else {
            maxProfit += prices[i] - minPrice
            minPrice = prices[i]
        }
    }
    
    return maxProfit
};