fn solve(arr: &mut [i32]) -> Vec<&str> {
    let mut res = vec![];
    for i in 0..arr.len(){
        if arr[i]>0 {
            res.push("PUSH");
        }
        else if arr[i]<0 {
            res.push("POP");
        }
        else{
            res.push("STOP");
        }
    }
    res
}

fn main(){
    let mut vec1 = vec![1,2,3];
    let mut vec2 = vec![11,42,-3];
    let mut vec3 = vec![11, 0];
    let r = solve(&mut vec1);
    let c = solve(&mut vec2);
    let g = solve(&mut vec3);
    println!("{:?}", r);
    println!("{:?}", c);
    println!("{:?}", g);
}
