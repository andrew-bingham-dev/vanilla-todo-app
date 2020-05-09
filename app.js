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
  itemIndex++;
  tasks = [...tasks, {
    "id": itemIndex,
    "description": taskDescription,
    "status": "active"
  }];
  document.getElementById('txt-add').value = "";
  displayNewTask(tasks[0]);
}


function displayNewTask(newTask) {
  let taskDiv = document.createElement("div");
  taskDiv.id = newTask.id;

  // Create left button
  let taskBtnLeft = document.createElement("button");
  taskBtnLeft.classList.add("btn-list-left");
  taskBtnLeft.textContent = "Delete";

  // Create right button
  let taskBtnRight = document.createElement("button");
  taskBtnRight.classList.add("btn-list-right");
  taskBtnRight.textContent = "Complete"

  // Create the textbox
  let taskTextbox = document.createElement("input");
  taskTextbox.classList.add("txt-list-input");
  taskTextbox.type = "text";
  taskTextbox.value = newTask.description;

  // Add items to the div
  taskDiv.appendChild(taskBtnLeft);
  taskDiv.appendChild(taskTextbox);
  taskDiv.appendChild(taskBtnRight);

  // Add div to the page
  let listDiv = document.getElementById("task-list");
  listDiv.appendChild(taskDiv);


  // <button id="btn-clear" class="btn-left">Clear</button>
  // <input id="txt-add" class="txt-input" type="text">
  // <button id="btn-add" class="btn-right">Add</button>
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