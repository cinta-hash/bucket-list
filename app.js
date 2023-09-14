//Selectors
const input = document.querySelector(".input-area");
const addInputBtn = document.querySelector("#add-item");
const todoList = document.querySelector(".to-do-list");


//EventListeners
addInputBtn.addEventListener('click', addItem)

//Functions
function addItem(e){
    e.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todoDiv");

    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");

    todoDiv.appendChild(newTodo);
    
    const checkBtn = document.createElement("button");
    checkBtn.textContent = "check"
    checkBtn.classList.add("material-symbols-outlined");
    
    todoDiv.appendChild(checkBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete"
    deleteBtn.classList.add("material-symbols-outlined");

    todoDiv.appendChild(deleteBtn);

    todoList.appendChild(todoDiv);
}