/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxRich = 0
    for (let i = 0; i < nums.length; i++) {
        if (i > maxRich) {
            return false
        }
        
        maxRich = Math.max(maxRich, i + nums[i])
        
        if (maxRich >= nums.length - 1) {
            return true
        }
    }
    return false
};