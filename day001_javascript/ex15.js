// Date

// 현재시간
let now = new Date();
console.log(now);

// 2021년 01월 01일
let d1 = new Date(2021, 0/*month - 1*/,1)
console.log(d1);

// 2021년 01월 1일
let d2 = new Date(2021, 0/*month - 1*/,1, 12, 30, 40)
console.log(d2);

// 객체 메서드
console.log(
    "년도1: " + (now.getYear()+ 1900) + "\n" + 
    "년도2: " + now.getFullYear() + "\n" +
    "월: " + (now.getMonth() + 1 ) +  "\n" +
    "일: " + now.getDate() +  "\n" +
    "시: " + now.getHours() +  "\n" +
    "초: " + now.getMinutes() +  "\n"
);

d1.setFullYear(2022);
console.log(d1);
d1.setMonth(11);
console.log(d1);