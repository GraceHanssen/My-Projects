//Selectors
const todoInput = document.querySelector('.todo-(input');
const todoButton = document.querySelector('todo-button');
const todoList = document.querySelector('todo-list');

//Event Listeners
todoButton.addEventListener("click", addTodo);


//Functions

function addTodo(event){
    console.log(Hello);

//Prevent form from submitting
    event.preventDefault();


//Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

//Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

//Check MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = <i class="fas fa-check"></i>
    todoDiv.appendChild(completedButton);

//Check TRASH BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = <i class="fas fa-check"></i>
    todoDiv.appendChild(trashButton);

//Append TO LIST
    todoList.appendChild(todoDiv);
}