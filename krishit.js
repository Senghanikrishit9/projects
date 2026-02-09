console.log( 10 > 20 && 30 > 15);
console.log( 10 > 20 || 30 > 12);

// && will return first flasy value or the last value !
let a;
 
a = 10 && 20;
a = 10 && 20 && 30;

console.log(a);

const  posts = [];
posts.length > 0 && console.log(posts[0]);

// || will return the first turthy value or the last value !

let b;

b = 20 || 30;
b = 200 || 40 || 50;
console.log(b);