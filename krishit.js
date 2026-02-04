const x = 100;
if(true){
  const y = 200
  console.log(x + y);
}
// console.log(x+y) = can't access because its cannot declare in global varible

for (let i=0;i<=10;i++){
  console.log(i);
}

if(true){
  const a = 500;
  let b = 600;
  var c = 900;
}

console.log(c);

function run(){
  var d = 100;
  console.log(d);
}

run();