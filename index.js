/** @returns Boolean */
module.exports = function(nums, k) {  
    for (let i = 0; i < nums.length; i++) {
        const elementI = nums[i];
        for (let j = 0; j < nums.length; j++) {
            const elementJ = nums[j];
            if (i === j) {
                continue;
            }
            if (elementI + elementJ === k) {
                return true;
            }
        }
    }
    return false;
 };
