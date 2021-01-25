function plus1(a, b){
    return a + b;
}

const plus2 = function(a,b){
    return a + b;
}

const plus3 = (a, b) => a+b;

function calc(a, b, func){
    return func(a,b);
}

console.log(calc(1, 2, plus1));
console.log(calc(1, 2, plus2));
console.log(calc(1, 2, plus3));