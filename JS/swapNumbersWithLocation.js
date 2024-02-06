function swapNumbers(n, p1, p2){
    n = n.toString().split('').reverse().join('').split('');
    [n[p1-1], n[p2-1]] = [n[p2-1], n[p1-1]]
    return n.reverse().join('');
}

const n = 12345;
const p1 = 3;
const p2 = 5;
console.log(swapNumbers(n, p1, p2));
