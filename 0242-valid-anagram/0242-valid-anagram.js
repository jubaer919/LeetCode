/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    // "anagram" {a: 3, n: 1, g:1, r:1, m:1}
    
    if (s.length !== t.length) return false
    
    let hashmap = {}
    let hashmaptwo = {}
    for (let num of s) {
        hashmap[num] = (hashmap[num] || 0) + 1
    }
    for (let val of t) {
        hashmaptwo[val] = (hashmaptwo[val] || 0) + 1
    }
    
    for (let key in hashmap) {
        if(!(hashmap[key] === hashmaptwo[key])) {
            return false
           }
    }
    return true
};