let list = document.createElement('ul');
let info = document.createElement('p');
let button = document.createElement("button");
button.textContent = "add-button";
let html = document.querySelector('html');
let article = document.querySelector('article');

info.textContent = 'Below is a dynamic list. Click in add-list to add a new list item. Click a existing list item to change its text to what ya want.';

article.appendChild(info);
article.appendChild(button);
article.appendChild(list);

button.addEventListener('click', function(){
    let listItem = document.createElement('li');
    let listContent = prompt('Write what ya want.');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.addEventListener('click', function(e){
        e.stopPropagation();
        let listContent = prompt('Put the new stuff.');
        this.textContent = listContent;
    });
});