const strlit = 'hello';
const strObj = new String('hello');

console.log(strlit,typeof strlit);
console.log(strObj,typeof strObj);

// boxing
console.log(strlit.toUpperCase());
console.log(strlit[0]);

console.log(strlit.constructor);
console.log(strObj.constructor);


const funlit = function(x) {
    return x * x;
}

console.log(funlit , typeof funlit);

const obj1 = {};
const obj2 = new Object();

console.log(obj1,typeof obj1);
console.log(obj2, typeof obj2);



