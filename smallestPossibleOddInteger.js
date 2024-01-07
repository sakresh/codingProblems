function smallestPossibleOddInteger(n){
    let array = n.toString().split("").filter( (a) => parseInt(a) % 2 !== 0 );
    if(array.length === 0) return -1;
    else{
        return parseInt(array.sort().join(""));
    }

}


const num = 70009;
console.log(smallestPossibleOddInteger(num));
