// 1. synchronous : task run onw after another .the next task waits until the pervious task finishes

console.log("hello");
console.log("krishti");
console.log("you");

// 2. asynchronous : task can run without waiting  the previous tasks

console.log("start");
setTimeout(() => {
    console.log("processing...");
},1000);
console.log("End");


