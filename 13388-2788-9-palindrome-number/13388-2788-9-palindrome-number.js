/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString()
     let l=0; r=str.length-1
    let flag=true
    while(l<=r){
        if(str[l] != str[r]){
            flag=false
            break;
        }
        l++
        r--
    }
    return flag

};