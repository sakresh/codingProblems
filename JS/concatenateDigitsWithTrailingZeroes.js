function concatenateDigitsWithTrailingZeroes(num){
    let str = num.toString().split('');
    let nonZero = "";
    let zero = "";
    str.map( (x) => parseInt(x)!==0 ? nonZero+=x : zero+=x );
    return (nonZero + zero);
}

const nums = "520300";
console.log(concatenateDigitsWithTrailingZeroes(nums));
