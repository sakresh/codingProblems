function slice(str){
    let newStr=[];
    let i = 1;
    let k = 0;
    while(str[i]!=null){
        let j = str[k];
        let first = str[i];
        if(j==first){
            newStr.push(str.slice(k,i+1));
            str=str.slice(i+1);
            i=1;
        }
        i++;
    }
    return newStr.join('\n');
}

let str = "nayannamantenet";
console.log(slice(str));
