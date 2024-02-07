function sortRowsBinaryMatrix(mat){
    let decimal = mat.map(
        (x) => parseInt(x.join(''), 2)
    );
    for(let i=0; i<mat.length-1; i++){
        for(let j=i+1; j<mat.length; j++){
            if(decimal[i]>decimal[j]){
                let tempVal = decimal[i];
                decimal[i] = decimal[j];
                decimal[j] = tempVal;
                let temp = mat[i];
                mat[i] = mat[j];
                mat[j] = temp;
            }
        }
    }
    return mat;
}

const a = [
    ['1','1','1'],
    ['0','1','0'],
    ['0','1','0'],
    ['1','0','0'],
    ['0','1','1']
]
console.log(sortRowsBinaryMatrix(a));
