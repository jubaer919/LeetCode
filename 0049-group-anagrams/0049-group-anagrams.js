/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashmap = {}
    
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('')
        
        if (!hashmap[sortedStr]) {
            hashmap[sortedStr] = []
        }
        
        hashmap[sortedStr].push(str)
    }
    
    let result = Object.values(hashmap)
    return result
    
};