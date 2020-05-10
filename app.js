let activeTab = "todo";  // todo, completed
let itemIndex = 0;

let tasks = [];

let tabTodo = document.querySelector(".tab-todo");
let tabCompleted = document.querySelector(".tab-completed");
let btnClear = document.querySelector("#btn-clear");
let btnAdd = document.getElementById("btn-add");
let txtAdd = document.getElementById("txt-add");
let taskList = document.querySelector("#task-list")


function addTask(taskDescription) {
  tasks = [...tasks, {
    "id": itemIndex,
    "description": taskDescription,
    "status": "active"
  }];
  itemIndex++;
  document.getElementById('txt-add').value = "";
  displayNewTask(tasks[itemIndex - 1]);
}


function displayNewTask(newTask) {
  let taskLi = document.createElement("li");
  taskLi.id = newTask.id;

  // Create left button
  let taskBtnLeft = document.createElement("button");
  taskBtnLeft.classList.add("btn-left");
  taskBtnLeft.textContent = "Delete";

  // Create right button
  let taskBtnRight = document.createElement("button");
  taskBtnRight.classList.add("btn-right");
  taskBtnRight.textContent = "Complete"

  // Create the textbox
  let taskTextbox = document.createElement("input");
  taskTextbox.classList.add("txt-input");
  taskTextbox.type = "text";
  taskTextbox.value = newTask.description;

  // Add items to the li
  taskLi.appendChild(taskBtnLeft);
  taskLi.appendChild(taskTextbox);
  taskLi.appendChild(taskBtnRight);

  // Add li to the ul
  let listUl = document.getElementById("task-list");
  listUl.appendChild(taskLi);
}


btnClear.addEventListener("click", () => {
  document.getElementById('txt-add').value = "";
});


btnAdd.addEventListener("click", () => {
  let taskDescription = document.getElementById("txt-add").value
  if (taskDescription != "") {
    addTask(taskDescription);
  }
});


tabTodo.addEventListener("click", () => {
  console.log("clicked todo");
  if (activeTab === "completed") {
    activeTab = "todo";
    tabTodo.classList.add("tab-active");
    tabCompleted.classList.remove("tab-active");
  }
});


tabCompleted.addEventListener("click", () => {
  console.log("clicked completed");
  if (activeTab === "todo") {
    activeTab = "completed";
    tabCompleted.classList.add("tab-active");
    tabTodo.classList.remove("tab-active");
  }
});