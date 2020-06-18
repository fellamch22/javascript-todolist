// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners

todoButton.addEventListener('click',addTodo)

// functions
function addTodo(event){
    // preventing form from submitting
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // todo li
    const newtodo = document.createElement('li');
    newtodo.innerText
}