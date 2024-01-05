function Create2DArray(rows) {
  var arr = [];
  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }
  return arr;
}

const n = 4;
var list = Create2DArray(n);
var counter = n;
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        list[i][j]=counter;
        counter+=n;
    }
}

for(let i=1; i<n; i+=2){
    list.at(i).reverse();
}

for (i = 0; i < n; i++){
    var temp = "";
    for (j = 0; j < n; j++){
        temp=temp+" "+list[j][i];
     }
     console.log(temp);
}
