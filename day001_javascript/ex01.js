/*
1-1. 변수와 데이터 타입

1. 기본타입 (primitive type)
1) undefined
2) boolean
3) string
4) number

1-2. function

*/

var a1;
var a2 = 10;
var a3 = true;
var a4 = 'hello world';
a5 = function(){}
a6 = [1,2,3];

console.log(a1 + ": " + typeof(a1));
console.log(a2 + ": " + typeof(a2));
console.log(a3 + ": " + typeof(a3));
console.log(a4 + ": " + typeof(a4));
console.log(a5 + ": " + typeof(a5));
console.log(a6 + ": " + typeof(a6));

console.log("===================");

/*
1-3. 객체 (object) : new 생성자 함수를 사용해서 객체를 생성

console.log(u + ": " + typeof(u));
*/

var b1 = new Number(10);
var b2 = new Boolean(false);
var b3 = new String('Hello World');
var b4 = new Function("a", "b", "return a + b");
var b5 = new Object();

console.log(b1 + " : " + typeof(b1) + " : " + (b1 instanceof Number));
console.log(b2 + ": " + typeof(b2));
console.log(b3 + ": " + typeof(b3));
console.log(b4 + ": " + typeof(b4));
console.log(b5 + ": " + typeof(b5));
 
/*

2. 자바스크립트 객체를 구분하는 또 다른 방법
2-1. 내장객체(Built-In Native) 객체 : 자바스크립트 엔진에 미리 정의되어 있는 객체
Number, Boolean, Data, RegEx, ... 와 같은 생성자 함수
parseInt(), 
2-2 호스트 객체
호스트가 브라우저인 경우
document, location, xmlHttpRequest
2-3. 사용자 객체
자바스크립트 코드가 엔진에서 실행되는 런타임 객체
*/


console.log