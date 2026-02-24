function replaceFirstItems() {
  const fristItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "jalebi";

  fristItem.replaceWith(li);
}

function replacesecondItem() {
  const secondItem = document.querySelector("li:second-child");

  const li = document.createElement("li");
  li.textContent = "krishit";
  secondItem.replaceWith(li);
}

function replaceAllitems() {
  const replaceAll = document.querySelectorAll("li");

  lis.forEach((items) => {
    items.outerHtml = "<li> Replace All items </li>";
  });
}

function replaceAllitem() {
  const items = document.querySelectorAll("li");
  li.forEach(items, (index) => {
    lis.innerHtml = "raplace All the items";
  });
}
let h1 = document.querySelector("h1");
function replaceHeading() {
  h1.textContent = "krishit";
}
replaceHeading();

replaceFirstItems();
replacesecondItem();
replaceAllitems();
replaceAllitem();
