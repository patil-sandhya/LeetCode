/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(ar) {
       let n=[]
   for(let i=0; i<ar.length; i++){
        if(ar[i] == "[" || ar[i] == "]" || ar[i] == "(" || ar[i] == ")" || ar[i] == "{" || ar[i] == "}"){
            n.push(ar[i])
        }
    }
    if(n.length%2 != 0){
        return false
    }
    let st=[]
    let flag = 1
    for(let i=0; i<n.length; i++){
        let ch = n[i]
        if(ch=="{" || ch=="(" || ch=="["){
            st.push(ch)
        }else{
            if(st.length == 0){
                flag = 0
                break;
            }else{
                let popp = st.pop()
                if(ch == "}" && popp != "{"){
                    flag=0;
                    break
                }
                if(ch == "]" && popp != "["){
                    flag=0;
                    break
                }
                if(ch == ")" && popp != "("){
                    flag=0;
                    break
                }
            }  
        }
    }
    if(flag == 1 && st.length ==0 ){ return true
    }else{ return false}

};