//高階関数arraywalkを定義
function arrayWalk(data,f){
    for (let key in data){
        f(data[key],key);
    }
}

//コールバック関数
function showElement(value,key){
    console.log(key + '：' + value);
}
//コールバック関数
 function showDecoratedElement(value,key){
    //console.log('キー(' + key + ') : 値(' + value + ')');
    console.log(`キー(${key}) : 値(${value})`);
 }

 let ary = [1,2,4,8,16];
 arrayWalk(ary,showDecoratedElement);