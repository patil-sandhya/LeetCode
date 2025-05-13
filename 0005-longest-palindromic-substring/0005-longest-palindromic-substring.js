/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length == 1){
        return s
    }
    let start =0;
     let end = 0;
    const expandFromCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1];
    }
    for(let i=0; i<s.length; i++){
     let [l1, r1] = expandFromCenter(i, i);  
     let [l2, r2] = expandFromCenter(i, i + 1);
      if (r1 - l1 > end - start) {
            start = l1;
            end = r1;
        }
        if (r2 - l2 > end - start) {
            start = l2;
            end = r2;
        }
    }
    return s.substring(start, end + 1);
};

var checkPal = (str)=>{
    let flag=true;
    let l=0
    let r=str.length-1
    while(l<r){
        if(str[l] != str[r]){
            flag=false;
            break;
        }
        l++
        r--
    }
    return flag
}