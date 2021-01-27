
// function 객체 메소드 call

globalThis.name = 'node.js';

let f = function(s){
    console.log(s + ":" + this.name);
}

f('hello');

let o = {
    name: 'kimsong'
}

f.call(o, "hi");