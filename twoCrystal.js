
function twoCrystal(a){
    const jump = Math.floor(Math.sqrt(a.length));
    let i=0;
    for(i; i<a.length; i+=jump){
        if(a[i]){
            break;
        }
    }
    i-=jump;
    for(let j=0; j<jump; j++){
        if(a[j+i]){
            return (j+i);
        }
    }
}

const arr = [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1];
console.log(`The crystal breaks at the floor ${twoCrystal(arr)}`);

