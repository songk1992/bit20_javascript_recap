/* null and undefined */

// myVar1;
// console.log(myVar1 + ":");

var myVar1;
var myVar2 = null;

console.log(myVar1 + ":" + myVar2);
console.log(typeof(myVar1) + ":" + typeof(myVar2));

// 분명이 타입이 다른데 null 과 undefined의 값비교는 같다고 나온다.
console.log(myVar1 ==  myVar2); // 값비교
console.log(myVar1 ===  myVar2); // 타입비교

console.log("=========================");
 
console.log(1== "1");
console.log(true == 1);
console.log('abc' == new String('abc'));

console.log(true + 10);
console.log('abc' + new String('abc'));
console.log(1 + "1");

console.log("=========================");
console.log( 2 === "2");
console.log(true === 1);
console.log('abc' === new String('abc'))
console.log('abc' == new String('abc'));

// 추천
// 엄격하게 형변환을 해서 두 타입을 비교한다
var str = "5";
console.log(parseInt(str) == 5);
console.log(parseInt(str) == 5);

