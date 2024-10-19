/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l = 0;
    let hashmap = {}
    let result = 0
    
    for (let r = 0; r < s.length; r++) {
        hashmap[s[r]] = (hashmap[s[r]] || 0) + 1
        let mostfrequent = Math.max(...Object.values(hashmap))
        let windowlength = r - l + 1
        
        if ((windowlength - mostfrequent) > k) {
            hashmap[s[l]] -= 1
            l += 1
        }
        result = Math.max(result, r - l + 1)
        
    }
    
    return result
};