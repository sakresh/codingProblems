fn string_swap(str : &mut String) -> String {
    let mut c: Vec<&str> = str.split_terminator("").collect::<Vec<&str>>();
    let mut len = str.len();
    if len%2!=0{
        len -= 1;
    }
    let mut i = 1;
    let mut temp;
    while i<len{
        temp = c[i];
        c[i] = c[i+1];
        c[i+1] = temp;
        i+=2;
    }
    let res:String = c.concat();
    res
}

fn main(){
    let mut s = String::from("javay");
    println!("{}",string_swap(&mut s));
}
