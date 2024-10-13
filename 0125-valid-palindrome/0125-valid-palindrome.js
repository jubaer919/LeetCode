/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let lowrStr = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase()
    let i = 0
    let j = lowrStr.length - 1
    
    while (i < j) {
        if (lowrStr[i] !== lowrStr[j]) {
            return false
        }
        
        i++
        j--
    }
    
    return true
    
};