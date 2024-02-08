fn main(){
    let n = 31;
    for i in 1..n{
        if i32::pow(i,2) < n {
            println!("{}", i32::pow(i,2));
        }
        else{
            break;
        }
    }
}
