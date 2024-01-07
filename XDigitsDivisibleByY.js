function result(nums, x, y){
    let res = nums.filter( (a) => (a.toString().length === x && parseInt(a)%y === 0));
    if (res.length === 0) return -1;
    return res;
}

var array = [657, 12, 10, 87, 66];
//var array = [2245, 6845, 3214, 214];
let x = 2;
let y = 3;
console.log(result(array, x, y));
