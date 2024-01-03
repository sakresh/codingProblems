// check whether the given number or the str is a palindrome or not
function palindromeCheck(n){
    let start = 0;
    let end = n.toString().length-1;
    let str = n.toString();
    while(start < end){
        if(str[start] !== str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

const num = 121;
//const num = 123;
console.log(palindromeCheck(num));
