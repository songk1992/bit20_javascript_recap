/*

scope : 변수의 범위
정적 스코프 : global, block, function

var -> function scope

*/

var i = 10;
f = function(){
    var i = 20;
    console.log("i = "+  i);
    j = 30;
    var k = 10;
}

f();
console.log("i = "+  i);
console.log(j);

console.log("===========");

{
    let x = 100000;
    const PI = 3.14;

    x = 100;
    // 상수이기 때문에 오류
    // PI = 3.14
}

// 접근 안됨
// console.log(x);





