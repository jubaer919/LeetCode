/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashmap = {}
    
    for (let i = 0; i < nums.length; i++) {
        let otherVal = target - nums[i]
        
        if (otherVal in hashmap) {
            return [hashmap[otherVal], i]
        }
        
        else {
            hashmap[nums[i]] = i
        }
    }
};