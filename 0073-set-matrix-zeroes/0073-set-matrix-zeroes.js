/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(mat) {
    let r=mat.length
    let c= mat[0].length
      let zin = []
    
    for(let i=0; i<r; i++){
        for(let j=0; j<c; j++){
            if(mat[i][j] == 0){
             zin.push([i,j])
            }
        }
    }

    for(let i=0; i<zin.length; i++){
        changeMat(zin[i][0], zin[i][1])
    }
 function changeMat(row,col){
     for(let k=0; k<r; k++){
        mat[k][col] = 0;
    }
    //console.log(newmat)
    for(let l=0; l<c; l++){
        mat[row][l] = 0;
    }
    //console.log(newmat)
 }
//console.log(mat)
    for(let i=0; i<r; i++){
      let res = mat[i].join(" ")
    //   console.log(res)
    }
return mat
};