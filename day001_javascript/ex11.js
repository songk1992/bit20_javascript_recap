console.log("------ 배열 메소드 concat ------");

let colors = ['black', 'white', 'yellow'];
let fruits = ['mango', 'banana', 'apple'];

let test = fruits.concat(colors);
 //let fcolor = copiedObj(test);
// console.log(fcolor);
//fcolor.push('mellon');
//console.log(test);


console.log(" join ");
let str = fruits.join(',');
console.log(str);

console.log(" 배열 메소드 stack 지원(pop, push) ");
let color = colors.pop();
console.log(color);
console.log(colors);
colors.push('red');
console.log(colors);

console.log(" 배열 메소드 : reverse ");
console.log(fruits);
fruits.reverse();
console.log(fruits);

console.log("배열 메소드 shift")
let numbers = [400, 300, 200, 100]
console.log(numbers);
numbers.shift();
console.log(numbers);

console.log("배열메소드 slice");
let numbers2 = numbers.slice(1, 3);
console.log(numbers2);

console.log("배열메소드 sort");
console.log(numbers);
numbers.sort();
console.log(numbers);

console.log("배열메소드 splice");
console.log(numbers);
let numbers3 = numbers.splice(0, 2);
console.log(numbers3);

let a1 = [0, 1, 2, 3, 4];
a1.splice(1, 3, 10);
console.log(a1);

let a2 = [0, 1, 2, 3, 4];
let a3 = a2.splice(1, 1, 10);
console.log(a3);
console.log(a2);

let a4 = [0, 1, 2, 3, 4];
let a5 = a4.splice(1, 0, 10);
console.log(a5);
console.log(a4);


