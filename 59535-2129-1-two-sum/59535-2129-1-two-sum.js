/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // let len= nums.length
    for(i=0; i<nums.length; i++){
        let n=nums[i]
        for(j=i+1; j<nums.length; j++){
            // let ans = n+nums[j]
            if(n+nums[j] == target){
                return [i,j];
                break;
            }
        }
    }
};