const input = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13];
const sum = input.reduce( (x, y) => x+y, 0);
const n = input[input.length - 1];
const max = n*(n+1)/2;
console.log(max - sum);
