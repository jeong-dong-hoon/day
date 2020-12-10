console.log('hello world');
function scr(){
  var x = new String('hello world');
  console.log(x);
}
scr();

//es 6 이전버전
var name = '홍길동';

//es 6 이후버전
let name2 = '정동훈';
const z =30; //상수는 const
function sum(a,b){
  let result;
  result = a+b;
  return result;
}
let result2 = function(a,b){
  return a+b;
}
console.log(name);
console.log(name2);
console.log(sum(1,3));
console.log(result2(3,2));

// 배열생성 2가지 방법
let array = new Array(1,2,3,4,5);
const array2 = [1,2,3,4,5];

console.log(array.toString());
console.log(array2.toString());

// 객체생성
const person ={
  name : '홍길동',
  age : 30,
  eat:function(){
    console.log('먹다');
  },
  smile:function(){
    console.log('웃다');
  }
};
console.log(person);
person.eat();

// new object()로 객체 생성
let d = new Object(person);
d.name = '정동훈';
d.age = 28;

console.log(d);
console.log(person);

// {}빈객체 생성
const person2 = {};
// 생성자 함수
function Person(name,age){
  this.name = name;
  this.age = age;
  this.smile = function(){console.log('웃다');
};
this.eat = function(){console.log('먹다');};
}

const dh = new Person('정명훈',40);
const dh1 = new Person('정지훈',50);
const dh2 = new Person('정동훈',30);

console.log(dh.name);
console.log(dh1.name);

// class 생성자함수의 syntatic sugar(문법적 설탕)
class PersonX {
  constructor(name,age){
    this.name = name;
    this.age = age;

  }
  // 메서드
  smile() {
    console.log('웃다');
  }
  eat(){
    console.log('먹다');
  }
}

const dx = new PersonX('정동훈',80);
console.log(dx.name);
console.log(dx.age);