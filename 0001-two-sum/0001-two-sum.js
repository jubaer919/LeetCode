/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashmap = {}
    
    for (let i = 0; i < nums.length; i++) {
        let secVal = target - nums[i]
        
        if (secVal in hashmap) {
            return [hashmap[secVal], i]
        }
        
        hashmap[nums[i]] = i
    }
};