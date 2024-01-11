function fun(n){
    const u = n%10;
    console.log(u);
    let r=0;
    if(u === 0) return 0;
    else{
        let len = n.toString().length;
        let i = 0;
        while(i<len){
            r = r*10 + u;
            i++;
        }
        return r;
    }
}

const n = 1859;
const res = fun(n);
console.log(res);
