/*
자바스크립트 객체는 function 타입과 object 타입 2가지가 있다
그런데 보통 function 타입 객체는 함수라고 부른다
따라서 자바스크립트 객체라고 부르는 것은 object 타입의 객체를 가리킨다.
*/

// 생성방법1 new + 생성자 함수를 사용하는 방법
let o1 = new Object();
o1.name = '둘리';
o1.age= 10;
o1.friend = new Object();
o1.friend.name = '마이콜1';
o1.friend.age = 30;

console.log(o1.friend);

// 생성방법2 - {} literal을 사용하는 방법
let o2 = {};
o2.name = '둘리';
o2.age= 10;
o2.friend = {};
o2.friend.name = '마이콜2';
o2.friend.age = 30;

console.log(o2.friend);

//생성방법3 - JSON
let o3 = {

    name: '둘리',
    age: 10,
    friend: {
        name: '마이콜3',
        age: 30
    }
};

console.log(o3.friend);

// XmlHttpRequest 호스트(브라우저) 객체를 사용해서 통신에 많이 사용한다.
let response = '{"no" : 1, "name" : "김송", "email": "이메일@이메일"}';
let user = eval("(" + response + ")");
console.log(typeof(user));
console.log(user.no);
