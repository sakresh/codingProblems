let str = "A jelly fish stings even when dead";
const num = 3;
let newStr = str.split(" ");
for(let i = num; i < newStr.length; i+=num){
    newStr[i] = newStr[i].split("").reverse().join("");
}
console.log(newStr.join(" "));
