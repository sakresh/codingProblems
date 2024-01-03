function subArraySum(a, s){
    let i=0, j=0, sum=a[0];
    while(j<a.length){
        if(sum==s){
            console.log(`Start: ${i}\nEnd: ${j}`);
            break;
        }
        if(sum<s){
            j++;
            sum+=a[j];
            continue;
        }
        if(sum>s){
            sum-=a[i];
            i++;
            continue;
        }
    }
}

const arr= [1,2,3,7,6];
const s = 12;
subArraySum(arr,s);
