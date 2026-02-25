const text = document.querySelector("p");
const itemlist = document.querySelector(".item-list-items");
const items = itemlist.querySelectorAll("li");

function run(){
  console.log(itemlist.className);
  text.className = "dark";
  items.forEach((item,index) => {
    itemlist.style.color = 'red';
    
    if(index === 2){
      itemlist.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;