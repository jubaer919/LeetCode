/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    const hashMap = {}
    
    for (let num of nums) {
        hashMap[num] = (hashMap[num] || 0) + 1
    }
    
    let sortedHashMap = Object.entries(hashMap).sort((a,b) => b[1] - a[1])
    
    let mostfrequentK = sortedHashMap.slice(0,k).map(entry => Number(entry[0]))
    
    return mostfrequentK;
    
};