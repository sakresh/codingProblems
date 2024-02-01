function solve(array){
    let count = 0;
    let res = array.every( (v) => v===array[0] );
    if(res === true) return 0;
    while(true){
        for(let i=0; i<array.length-1; i++){
            let max = Math.max(array);
            if(array[i]!==max){
                array[i]++;
                count++;
            }
            let res = array.every( (v) => v===array[0] );
            if(res === true) return count;
        }
    }
}

const num1 = [1,2,3];
const num2 = [1,1,1];
let res1 = solve(num1);
let res2 = solve(num2);
console.log(res1);
console.log(res2);
