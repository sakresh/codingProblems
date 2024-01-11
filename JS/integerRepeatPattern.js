function pattern(num){
    let list = [];
    let i = 0;
    let j;
    let k = num;
    let l = 1;
    for(i; i<num+2; i++){
        let temp = "";
        let t = k.toString();
        for(j=0; j<num+1; j++){
            temp+=t;
        }
        list.push(temp);
        k++;
    }
    var res = list.map(
        (x) => (x.split("")).map( (y) => parseInt(y) )
    )
    for(let i=1; i<num+1; i++){
        res[i][num-1] = l;
        l++;
    }
    res[num+1].fill(num);
    var final = res.map((x)=>x.map((y)=>y.toString()).join(""));
    return final;
}

const n = 4;
let r = pattern(n);
r.forEach(
    (x) => console.log(x)
)

