function concatenateFirstAndLastXDigits(n, x){
    let first = n.toString().slice(0,x);
    let last = n.toString().slice(n.toString().length - x);
    return first + last;
}

const num = 67904;
const x = 5;
console.log(concatenateFirstAndLastXDigits(num, x));
