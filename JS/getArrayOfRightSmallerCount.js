function getArrayOfRightSmallerCount(nums){
    let res = [];
    for(let i=0; i<nums.length-1; i++){
        let count = 0;
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]>nums[j]){
                count++;
            }
        }
        res.push(count);
    }
    res.push(0);
    return res;
}

const arr = [2, 19, 7, 10, 5, 15, 4];
console.log(getArrayOfRightSmallerCount(arr));
