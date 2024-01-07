function minimumPositiveSumPair(array){
    let i = 0, j = i+1;
    let min = array[0];
    let [val1 , val2] = [0, 0];
    while(j<array.length){
        if((array[i] + array[j]) < min){
            min = array[i] + array[j];
            [val1 , val2] = [array[i], array[j]];
        }
        if(j === array.length - 1){
            i++;
            j=i+1;
            continue;
        }
        j++;
    }
    return [val1 , val2];
}

const list = [12, 6, 9, 4];
console.log(minimumPositiveSumPair(list));
