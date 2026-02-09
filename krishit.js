// 1. ||= assigns the right side value only if the left is a flase value.
let a = false;

if(!a){
  a = 10;
}

a ||= 10;
console.log(a);
// 2. &&= assigns the right side value only if the left value is a turthy.

let b = 10;

if(b){
  b = 20;
}

b = b && 20;
console.log(b); 
// 3. ??= assigns the right  side value only if the left is null undefined.
let c = null;

if(c === null || c === undefined){
  c = 30;
}
console.log(c);