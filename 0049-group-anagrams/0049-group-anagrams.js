/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(ar) {
     let obj={}
     let n= ar.length
    for(let i=0; i<n; i++){
        let a= ar[i]
        let b= a.split("").sort().join("")
        if(!obj[b]){
            obj[b]=[a]
        }else{
            obj[b].push(a)
        }
    }
    //console.log(obj)
    let ans=[]
    for(let key in obj){
        let len= obj[key].length
        console.log(len)
        let resAr=[]
        for(let i=0; i<len; i++){
            resAr.push(obj[key][i])
        }
        ans.push(resAr)
    }
    return ans

};