// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//event listeners

todoButton.addEventListener('click',addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo);



// functions
function addTodo(event){
    // preventing form from submitting
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // todo li
    const newtodo = document.createElement("li");
    newtodo.innerText =todoInput.value;
    newtodo.classList.add("todo-item");
    todoDiv.appendChild(newtodo);

    //check mark button

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class = "fas fa-check" ></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //check trash button

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "fas fa-trash" ></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // append to todo list

    todoList.appendChild(todoDiv);
    //clear todo input value

    todoInput.value ="";
    

}

function deleteCheck(e){
    const item = e.target ;
    // DELETE Button
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement ;
        todo.classList.add("fall");
        todo.addEventListener('transitioned',function(){
        
            todo.remove();

        });
    }

    // check button
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement ;
        todo.classList.toggle("completed");
    }

}
function filterTodo(e){

    const todos = todoList.childNodes ;
    console.log(todos);
    todos.forEach(function(todo){
        switch(e.target.value)
    })
}