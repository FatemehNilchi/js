let list = document.querySelector("#todoList");
let input = document.querySelector("#itemInput");
let btnAdd = document.querySelector("#addButton");
let btnClear = document.querySelector("#clearButton");
let todosArrey = [];

function addTodoFunc() {
  if (input.value.trim() !== "") {
    let todoObj = {
      id: Date.now(),
      title: input.value,
      complete: false,
    };
    input.value = "";
    todosArrey.push(todoObj);
    setLocalStorage(todosArrey);
    todosGenrator(todosArrey);
  }
  input.focus();
}

function setLocalStorage(todosList) {
  localStorage.setItem("todos", JSON.stringify(todosList));
}

function todosGenrator(todosList) {
  list.innerHTML = "";
  todosList.forEach((element) => {
    let newLi = document.createElement("li");
    if (element.complete) {
      newLi.className = "completed well";
    } else {
      newLi.className = "uncompleted well";
    }
    newLi.innerHTML = `
    <label>${element.title}</label>
    <button class="btn btn-success">Complete</button>
    <button class="btn btn-danger">Delete</button>
  `;
    let btnRemoveTodo = newLi.querySelector(".btn-danger");
    let btnCompleteTodo = newLi.querySelector(".btn-success");
    btnRemoveTodo.addEventListener("click", () => {
      removeTodo(element.id);
    });
    btnCompleteTodo.addEventListener("click", () => {
      completeTodo(element.id);
    });
    list.append(newLi);
  });
}

function getLocalSrorage() {
  let localTodoes = JSON.parse(localStorage.getItem("todos"));
  if (localTodoes) {
    todosArrey = localTodoes;
  } else {
    todosArrey = [];
  }
  todosGenrator(todosArrey);
}

function removeTodo(id) {
  // console.log("Removing todo with id:", id);
  // // حذف Todo از آرایه todosArrey بر اساس آیدی
  // todosArrey = todosArrey.filter((todo) => todo.id !== id);
  let localTodoes = JSON.parse(localStorage.getItem("todos"));
  todosArrey = localTodoes;
  let mainTodo = todosArrey.findIndex((todo) => {
    return id === todo.id;
  });
  console.log(mainTodo);
  todosArrey.splice(mainTodo, 1);
  console.log(todosArrey);
  setLocalStorage(todosArrey);
  todosGenrator(todosArrey); // بازسازی لیست Todoها
}

function completeTodo(id) {
  let localTodoes = JSON.parse(localStorage.getItem("todos"));
  todosArrey = localTodoes;
  let mainTodo = todosArrey.findIndex((todo) => {
    return id === todo.id;
  });
  todosArrey[mainTodo].complete = !todosArrey[mainTodo].complete;
  console.log(todosArrey[mainTodo]);
  setLocalStorage(todosArrey);
  todosGenrator(todosArrey); // بازسازی لیست Todoها
}

function clearTodosFunc() {
  localStorage.removeItem("todos");
  getLocalSrorage();
}

function EnterTodosFunc(event) {
  if (event.key === "Enter") {
    addTodoFunc();
  }
}

window.addEventListener("load", getLocalSrorage);
btnAdd.addEventListener("click", addTodoFunc);
btnClear.addEventListener("click", clearTodosFunc);
input.addEventListener("keydown", EnterTodosFunc);
