function isValid(n1, n2){
    let count = 0;
    for(let i=n1; i <= n2; i++){
        let visited = Array(10).fill(0);
        let num = i.toString().split("").map(x => parseInt(x));
        let j = 0;
        // The whole logic goes here
        while(j < num.length){
            if(visited[num[j]]==1){
                num.fill(0);
            }
            else{
                visited[num[j]]=1;
            }
            j++;
        }
        // Condition to check whether the number has repeated digit
        if(!(num.includes(1))){
            count++;
        }
    }
    return count;
}

let result = 200-101+1;
console.log(result - isValid(101, 200));
