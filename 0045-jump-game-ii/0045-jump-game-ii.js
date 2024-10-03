/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    
    let currentPosition = 0
    let maxRich = 0
    let count = 0
    
    if (nums.length === 1) return count
    
    for (let i = 0; i < nums.length; i++) {
        maxRich = Math.max(maxRich, i + nums[i])
        
        if (i === currentPosition) {
            count++
            currentPosition = maxRich
            
            if (currentPosition >= nums.length - 1) break;
        }
    }
    return count
    
};