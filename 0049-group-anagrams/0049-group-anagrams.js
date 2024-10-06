/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hashMap = {}
    
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('')
        
        if (!hashMap[sortedStr]) {
            hashMap[sortedStr] = []
        }
        
        hashMap[sortedStr].push(str)
    }
    
    return Object.values(hashMap)
    
};