/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()
    let first = strs[0]
    let last = strs[strs.length-1]
    let min = Math.min(first.length, last.length)
    let i=0
    // let ans = ""
    while(i<min && first[i] == last[i]){
        // ans+=first[i]
        i++
    }
    return first.substring(0,i)
};