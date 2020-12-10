const array = new Array(3);
array[0] = 1;
array[1] = 2;
array[2] = 3;
array[3] = 4;
array[4] = 5;
// array[3] = 4;
let sum = 0;
for (let i=0; i<array.length; i++){
  sum += array[i];
  
}

console.log(sum);

