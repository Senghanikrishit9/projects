function insertAfter(newEl,existingEl){
    existingEl.parentElments.insertbefore(newEl,existingEl.nextSibling);
}

const li = document.querySelector("li");
li.textContent = 'Insert Me after'

const firstItem = document.querySelector('li : first-child');

insertAfter(li,firstItem);