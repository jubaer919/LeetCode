/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

   let hashmap = {}
   
   for (let num of nums) {
       hashmap[num] = (hashmap[num] || 0) + 1
   }
    
    let frequency = Math.floor(nums.length / 2)
    
    for (let key in hashmap) {
        if (hashmap[key] > frequency) {
            return parseInt(key)
        }
    }
};