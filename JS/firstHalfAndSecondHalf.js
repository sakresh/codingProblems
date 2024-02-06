function isFloat(number){
    return Number(number) === number && number % 1 !== 0;
}

function firstHalfAndSecondHalf(n){
    let string = n.toString();
    let [firstHalf, secondHalf] = [parseInt(string.slice(0, string.length/2)), parseInt(string.slice(string.length/2, string.length))]
    let [firstSqrt, secondSqrt]= [isFloat(Math.sqrt(firstHalf)), isFloat(Math.sqrt(secondHalf))];
    if(firstSqrt === false && secondSqrt === false){
        return true;
    }else{
        return false;
    }
}

const num = 625526;
console.log(firstHalfAndSecondHalf(num));
