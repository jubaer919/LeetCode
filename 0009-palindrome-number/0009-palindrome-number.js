/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let strX = x.toString()
    let i = 0
    let j = strX.length - 1
    
    while (i <= j) {
        if (!(strX[i] === strX[j])) {
            return false
        }
        i += 1
        j -= 1
    }
    return true
};