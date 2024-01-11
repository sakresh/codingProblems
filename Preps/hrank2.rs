fn solve(num: i32) -> i32 {
    let mut t1= vec![];
    let mut t2= vec![];
    for i in 1..=num{
        if num%i == 0{
            if i%2==0{
                t1.push(i);
            }else{
                t2.push(i);
            }
        }
    }
    if t1.len() == t2.len(){ 1 }
    else { 0 }
}

fn main(){
    let n1 = 14;
    println!("{}",solve(n1));
}
