function fib_sum(n, n1, n2){
    let res = 0, sum = 0, i = 0;
    while(i <= n){
        sum += res;
        res = n1+n2;
        n1 = n2;
        n2 = res;
        i++;
    }
    return res-1;
}

const n = 4;
const n1 = 0, n2 = 1;
console.log(fib_sum(n, n1, n2));
