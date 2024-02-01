function Fact(n){
    if(n===0 || n===1) return 1;
    else{
        return n*Fact(n-1);
    }
}

function permutation(n, r){
    let res = (Fact(n))/(Fact(n-r));
    return res;
}

const n = 5;
const r = 5;
console.log(permutation(n,r));
