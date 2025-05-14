/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(ar) {
    let n = ar.length
     let j=0;
    let pre=0;
    let max=0;
    for(let i=0;i<n-1;i++){
        max=Math.max(max,i+ar[i]);
        if(i===pre){
            j++;
            pre=max;
        }
    }
    // console.log(j)
    return j
};