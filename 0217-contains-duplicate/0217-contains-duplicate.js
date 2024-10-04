/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashmap = {}
    
    for(let num of nums) {
        if (num in hashmap) {
            return true
        }
        hashmap[num] = (hashmap[num] || 0) + 1
    }
    
    return false
};