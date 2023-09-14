//Selectors
const input = document.querySelector(".input-area");
const addInputBtn = document.querySelector("#add-item");
const todoList = document.querySelector(".to-do-list");


//EventListeners
addInputBtn.addEventListener('click', addItem)

//Functions
function addItem(e){
    e.preventDefault();

}