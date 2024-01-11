use std::*;

fn main(){
    let mut inp = String::new();
    io::stdin().read_line(&mut inp).expect("Failed to read input");
    let size:usize = inp.trim().parse().expect("Failed to parse input");
    let mut vec = vec![0;size];
    for i in 0..size{
        let mut input = String::new();
        io::stdin().read_line(&mut input).expect("Failed to read input");
        let num:i32 = input.trim().parse().expect("Failed to parse input");
        vec[i] = num;
    }
    vec.sort();
    let mut res:String = Default::default();
    for i in 0..vec.len(){
        res += &vec[i].to_string();
        if i == vec.len()-1 {
            break;
        }
        res += " ";
    }
    let r =  &vec[..];
    println!("{}", res);
}
