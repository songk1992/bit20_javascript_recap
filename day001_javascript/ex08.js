let MyObject = function(name, age){
    this.name = name;
    this.age = age;
}

MyObject.prototype.school = 'bit academy';
MyObject.prototype.course = 'java fullstack';
MyObject.prototype.info = function(){

    // prototype으로 바꿔보기
    MyObject.forEach(element => console.log(element))
    console.log("");
}

console.log(MyObject.prototype);

// MyObject 객체를 생성
let o1 = new MyObject('둘리', 10);
o1.school = 'muticampus';
console.log(o1);
console.log(o1.school);
o1.info();

// MyObject 객체를 생성
let o2 = new MyObject('마이콜', 30);
console.log(o2);
console.log(o2.school);

// 오버라이딩
o2.info = function(){
    console.log("비밀!");
}

o2.info();