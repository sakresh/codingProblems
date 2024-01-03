function rotate(array, k){
    let new_array = [] ;
    let i = 0, len = array.length;
    while(i < (len - k)){
        new_array.push(array[i]);
        i++;
    }
    i=0;
    while(i < k){
        new_array.unshift(array[len-i-1]);
        i++;
    }
    return new_array;
}

const array = [10, 20, 30, 40, 50, 60, 70];
const k = 4;
console.log(rotate(array, k));
