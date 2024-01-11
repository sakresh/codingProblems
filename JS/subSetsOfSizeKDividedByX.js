function slice(n, k, x){
    let n1 = n.toString().slice("");
    let sliced = [];
    for(let i=0; i<n1.length; i++){
        if((parseInt(n1.slice(i, i+k)) >= (10)**(k-1)) && parseInt(n1.slice(i, i+k))%x===0 ){
            sliced.push(n1.slice(i, i+k));
        }
        else{
            continue;
        }
    }
    return sliced;
}

//const n = 2421036;
//const k = 2;
//const x = 6;
//const n = 900456;
//const k = 3;
//const x = 9;
const n = 51636440163932888;
const k = 5;
const x = 8;
console.log(slice(n, k, x).length);
