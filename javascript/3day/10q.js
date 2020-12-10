'use strict';//원격모드사용선언
const bookarray = new Array(5);
let a;
class book{
  constructor(name,author,price){
    this.name = name;
    this.author = author;
    this.price = price;
  }
};

for(let i=0; i<5; i++){
  let input = prompt('책이름,저자,가격')
  let split = input.split(',');
  bookarray[i] = new book(split[0],split[1],split[2]);
  console.log(bookarray[i].name+","+bookarray[i].author+","+bookarray[i].price);

};


for(let i=0; i<5; i++){
  for(let j=0; j<i; j++){
    if(bookarray[i].price>bookarray[j].price){
      a = bookarray[i]
      bookarray[i] = bookarray[j];
      bookarray[j] = a;
      
    }
  }
}

console.log('가장비싼책은'+bookarray[0].name);