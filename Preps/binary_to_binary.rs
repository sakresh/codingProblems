fn binary(x:i64) -> String{
    let mut res:String = String::new();
    let mut i = x;
    while i!=0{
        res += &(i%2).to_string();
        i/=2;
    }
    res
}

fn main() {
    let n:i64 = 6;
    let bin1 = binary(n.clone());
    let res = bin1.parse::<i64>();
    let bin2 = binary(res.expect("Expected an i64"));
    println!("{}", bin2+(&bin1.chars().rev().collect::<String>()));
}


