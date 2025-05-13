/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(ar) {
    ar = ar.split("")

    let j=0
    let st=[]
    for(let i=0; i<ar.length; i++){
        if(
            ar[i] == "a" ||
            ar[i] == "e" ||
            ar[i] == "i" ||
            ar[i] == "o" ||
            ar[i] == "u" || 
            ar[i] == "A" ||
            ar[i] == "E" ||
            ar[i] == "I" ||
            ar[i] == "O" ||
            ar[i] == "U"
        ){
           st.push(ar[i]) 
           j++
        }
    }
    for(let i=0; i<ar.length; i++){
        if(
            ar[i] == "a" ||
            ar[i] == "e" ||
            ar[i] == "i" ||
            ar[i] == "o" ||
            ar[i] == "u" || 
            ar[i] == "A" ||
            ar[i] == "E" ||
            ar[i] == "I" ||
            ar[i] == "O" ||
            ar[i] == "U"
        ){
            ar[i] = st[j-1]
            j--
        }
    }

    let ans = ar.join("")
    return ans
};