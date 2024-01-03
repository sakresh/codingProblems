
function reverse(number){
    return parseInt(number.toString().split("").reverse().join(""));
}

const input = 123;
console.log(reverse(input));
