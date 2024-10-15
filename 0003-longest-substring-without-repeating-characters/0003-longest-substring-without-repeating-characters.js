/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let mySet = new Set()
    let i = 0
    let maxLength = 0
    
    for (let j = 0; j < s.length; j++) {
        while (mySet.has(s[j])) {
            mySet.delete(s[i])
            i++
        }
        mySet.add(s[j])
        
        maxLength = Math.max(maxLength, (j - i + 1))
    }
    
    return maxLength
};