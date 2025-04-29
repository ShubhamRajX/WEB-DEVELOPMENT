const mainTodoElem = document.querySelector(".todo-lists-elem");
const inputValue = document.getElementById("inputValue");


const getTodoListFromLocal = () => {
   return JSON.parse(localStorage.getItem("todoList"));
};

const addTodoListLocalStorage = (localTodoLists) => {
    return localStorage.setItem("todoList", JSON.stringify(localTodoLists));
};

let localTodoLists = getTodoListFromLocal() || [];

// adding add to list dynamically
const addTodoDynamicElement = (curElem) => {
    const divElement = document.createElement("div");
    divElement.classList.add("main_todo_div");   
    divElement.innerHTML = `<li> ${curElem} </li>  <button class="deleteBtn">Delete</button>` ;
    mainTodoElem.append(divElement);
};


const addTodoList = (e) => {
    e.preventDefault();

    const todoListValue = inputValue.value.trim();

    inputValue.value = "";

    if(!localTodoLists.includes(todoListValue) && todoListValue !== "") {
    localTodoLists.push(todoListValue);
    localTodoLists = [...new Set(localTodoLists)];
    console.log(localTodoLists);
    localStorage.setItem("todoList", JSON.stringify(localTodoLists));
    
    addTodoDynamicElement(todoListValue);
    //or
    // const divElement = document.createElement("div");
    // divElement.classList.add("main_todo_div");   
    // divElement.innerHTML = `<li> ${inputValue.value} </li>  <button class="deleteBtn">Delete</button>` ;
    // mainTodoElem.append(divElement);  
    }      
};

const showTodoList = () => {
    console.log(localTodoLists);

    localTodoLists.forEach( (curElem) => {
        addTodoDynamicElement(curElem);
    });
    
};

showTodoList();

// remove the data
const removeTodoElem = (e) => {
    const todoListRemove = e.target;
    let todoListContent = todoListRemove.previousElementSibling.innerText;
    let parentElem = todoListRemove.parentElement;
    console.log(todoListContent);

    localTodoLists = localTodoLists.filter((curTodo) => {
        console.log(curTodo);
        return curTodo !== todoListContent.toLowerCase();
        
    });
    
    addTodoListLocalStorage(localTodoLists);
    parentElem.remove();

    console.log(localTodoLists);
    
};


mainTodoElem.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(e.target);
    if(e.target.classList.contains("deleteBtn")){
        removeTodoElem(e);  
    }
});

document.querySelector(".btn").addEventListener("click", (e) => {
    addTodoList(e);
});