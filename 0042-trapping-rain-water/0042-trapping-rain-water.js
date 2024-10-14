/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0
    let maxLeftVal = 0
    let maxRightVal = 0
    const maxLeft = []
    const maxRight = []
    
    for (let i = 0; i < height.length; i++) {
        if (i === 0) {
            maxLeft.push(0)
        } else {
            maxLeftVal = Math.max(maxLeftVal, height[i - 1])
            maxLeft.push(maxLeftVal)
        }   
    }
    
    for (let i = height.length - 1; i >= 0; i--) {
        let max = 0
        if (i === height.length - 1) {
                maxRight.push(0)
            }else {
                maxRightVal = Math.max(maxRightVal, height[i + 1])
                maxRight.unshift(maxRightVal)
            }
    }
    
    for (let i = 0; i < height.length; i++) {
        let minval = Math.min(maxLeft[i], maxRight[i])
        
        if ((minval - height[i]) > 0) {
            result += (minval - height[i])
        }
    }
    
    return result
    
};