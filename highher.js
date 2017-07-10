/*function name(params){
    return 関数

}
高階関数*/

//高階関数arraywalkを定義
function arraywalk(data,f){
    for (let key in data){
        f(data[key],key);
    }
}
//配列を処理するためのユーザー定義関数
function showElement(value,key){
    console.log(key + '：' + value);
}
let ary = [1,2,4,8,16];
arraywalk(ary,showElement);