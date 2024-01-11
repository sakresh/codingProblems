#include <bits/stdc++.h>
using namespace std;

string fun(string s){
    int len=s.size();
    if(len%2!=0) len--;
    for(int i=0; i<len; i+=2){
        swap(s[i], s[i+1]);
    }
    return s;
}

int main(){
    string str = "javay";
    string res = fun(str);
    cout<<res;
}
