function grid(n,m){
    if( n===1 || m===1 ){
        return 1;
    }
    else{
        return grid(n, m-1) + grid(n-1, m);
    }
}

const n = 3;
const m = 3;

console.log(grid(n,m));

