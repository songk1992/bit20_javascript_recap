// 생성자 함수로 객체 생성해보기

let myFunction = function(){
    console.log("일반 함수");
}

// 생성자 함수(관례대로 대문자로 시작)
let MyObject = function(name, age){
    this.name = name;
    this.age = age;
}

myFunction();

let o1 = new MyObject('둘리', 10);
let o2 = new MyObject('마이콜', 20);

console.log(o1);
console.log(o2);

console.log("hell");