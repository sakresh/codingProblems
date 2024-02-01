function anagramCheck(s1, s2){
    if(s1.length!=s2.length) return 0;
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    s1 = s1.split("").sort().join("");
    s2 = s2.split("").sort().join("");
    if(s1 === s2) return 1;
    else return 0;
}


let str = "abc xyz pql mno bca zyx onm"
let count = 0;
str = str.split(" ");
for(let i=0; i<str.length - 1; i++){
    for(let j=i+1; j<str.length ; j++){
        let t = anagramCheck(str[i], str[j]);
        count += t;
    }
}
console.log(count);
