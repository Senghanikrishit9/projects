// 1. Array filters
const word = ['krishit','krish','megh'];

const result =word.filter(word => word.length >3)
   console.log(result);


// 2. Long version
let number = [1,2,3,4,5,6,7,8,9,10];

const output = number.filter(function (number){
  return number %  2 === 0;
})

console.log(output);

// 3.Short version

const outputs = number.filter(number => number %  3 === 0);
   console.log(outputs);