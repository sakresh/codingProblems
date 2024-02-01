const permutator = (inputArr) => {
    let result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }

    permute(inputArr);
    var newRes = result.map((x) => parseInt(x.join("")));
    var filtered = newRes.filter(
        (x) => (x<2400)
    )
    return (Math.max(...filtered).toString().match(/(..?)/g).join(":"));
}

let result = permutator(['1','2','3','4']);
console.log(result);
