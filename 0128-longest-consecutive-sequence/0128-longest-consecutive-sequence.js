/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    const mySet = new Set(nums);

    let longl = 0

    for(let num of mySet) {
        if (mySet.has(num - 1)) continue;

        let curl = 1;
        let curNum = num;

        while(mySet.has(curNum + 1)) {
            curl++;
            curNum++;
        }
        longl = Math.max(curl, longl)
    }

    return longl
};