/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   let i = 0
   let j = height.length - 1
   let maxArea = 0
   
   while(i < j) {
       let min = Math.min(height[i], height[j])
       let currentArea = (j - i) * min
       maxArea = Math.max(maxArea, currentArea)
       
       if (min === height[i]) {
           i++
       }
       else {
           j--
       }
   }
    return maxArea
};