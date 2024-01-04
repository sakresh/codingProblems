const input = "abcdeaacb";
const num = 3;
const first = input.slice(0,num);
const last = input.slice((input.length)-num);
console.log(first===last?"yes":"false");
