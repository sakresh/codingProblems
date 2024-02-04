function maxAbsoluteDifference(num){
    let i;
    let max = 0;
    for(i=0; i<num.length-1; i++){
        if(Math.abs(num[i]-num[i+1])>max){
            max = Math.abs(num[i]-num[i+1]);
        }
    }
    return max;
}

const arr = [10, 2, 3, 11];
console.log(maxAbsoluteDifference(arr));
