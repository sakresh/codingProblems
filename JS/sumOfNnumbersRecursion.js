function rec(n){
    if (n===0) return 0;
    return n + rec(n-1);
}

console.log(rec(5))
