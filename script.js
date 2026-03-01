const btn = document.querySelector(".btn")
// 1.Method 
btn.addEventListener("click", () => {
  console.log("button is cliked")
});
// 2. Method 
btn.addEventListener("click",function (){
  console.log("button was clicked");
});
