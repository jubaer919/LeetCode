/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    
    nums.reverse()
    // [7,6,5,4,3,2,1]
    let i = 0
    let j = k - 1
    
    while (i < j) {
        let store = nums[i]
        nums[i] = nums[j]
        nums[j] = store
        i++
        j--
    }
    
    i = k
    j = nums.length - 1
    
    while (i < j) {
        let store = nums[i]
        nums[i] = nums[j]
        nums[j] = store
        i++
        j--
    }
    
    return nums
};