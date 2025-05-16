/**
 * @param {number} n
 * @return {string[]}
 */

 function print(str,ar,close,open,n){
    if(open === 0 && close=== 0){
        ar.push(str)
        return
    }
    if(open != 0){
        print(str+"(",ar,close,open-1,n)
    }
    if(close>open){
        print(str+")",ar,close-1,open,n)
    }
}

var generateParenthesis = function(n) {
    let str=""
      let ar=[]
      let open=n
      let close=n
      let res = print(str,ar,close,open,n)
    return ar
 
};