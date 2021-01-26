/* 배열 확장 : 리스트 메소드 추가 하기 */

Array.prototype.insert = function(index, value){

    if (value instanceof Array){

        // for(let i = 0; i < value.length; i++){
        //    this.splice(index, 0, value[i]);
        //    index++
        // }
        
        // const this_ = this;
        // value.forEach(function(v){
        //    this_.splice(index++, 0, v);
        // });

        value.forEach(element => {
            this.splice(index++, 0, element);
        });
    }

    else{
        this.splice(index, 0, value);
    }

}

Array.prototype.remove = function(index){
    this.splice(index, 1);
}


// 리스트로 사용하기
let a = [1, 2, 4];
a. insert(2, 3);
console.log(a);

a.remove(3);
console.log(a);

a.insert(2, ['a', 'b', 'c']);
console.log(a);