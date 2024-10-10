/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let hashmap1 = {}
    let hashmap2 = {}
    
    for (let i = 0; i < s.length; i++) {
        hashmap1[s[i]] = (hashmap1[s[i]] || 0) + 1
        hashmap2[t[i]] = (hashmap2[t[i]] || 0) + 1
    }
    
    for (let key in hashmap1) {
        if (hashmap1[key] !== hashmap2[key]) {
            return false
        }
    }
    
    return true
    
}