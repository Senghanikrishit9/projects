// settimeout & cleartimeout
setTimeout(function() {
    console.log("hello from callback");
},2000);

console.log("hello from global");

setTimeout(changetext,2000);

function changetext () {
    document.querySelector("h2").textContent = "hello from callback";
}