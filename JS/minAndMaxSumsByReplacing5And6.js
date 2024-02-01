function solution(x, y){
    let X = x;
    let Y = y;
    let mX = parseInt(X.toString().replace('5','6'));
    let mY = parseInt(Y.toString().replace('5','6'));
    let lX = parseInt(X.toString().replace('6','5'));
    let lY = parseInt(Y.toString().replace('6','5'));
    return {
        maxval : mX+mY ,
        minval : lX+lY
    };
}

const x = 645;
const y = 656;
let res = solution(x,y);
console.log(Object.values(res));
