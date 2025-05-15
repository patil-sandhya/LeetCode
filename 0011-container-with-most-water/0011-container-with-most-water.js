/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(ht) {
    let l=0;
    let h=ht.length-1;
    let max=0
    while(l<h){
        let a= Math.min(ht[l],ht[h])
        if(ht[l] <= ht[h]){
            let b = a * (h-l)
            max= Math.max(max,b)
            l++
        }else{
           let b = a * (h-l)
            max= Math.max(max,b)
            h-- 
        }
    }
    return max
};