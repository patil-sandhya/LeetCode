/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var checkMin = ()=>{
        let l=0
        let h=nums.length-1
        while(l<h){
            let mid = Math.floor(l+ (h-l)/2)
            if(nums[mid] > nums[h]){
                l=mid+1
            }else{
                h=mid
            }
        }
        return l
    }
    let min = checkMin()
     var checkVal = (l,h) =>{
        while(l<=h){
            let mid= Math.floor(l+(h-l)/2)
            if(nums[mid] == target){
                return mid
            }else
            if(nums[mid] > target){
                h=mid-1
            }else{
                l=mid+1
            }
        }
        return -1
    }
    let res
    if(target >= nums[min] && target <= nums[nums.length-1]){
        res = checkVal(min,(nums.length-1))
    }else{
        res= checkVal(0,min-1)
    }
   
    return res
};