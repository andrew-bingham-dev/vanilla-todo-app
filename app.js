// Variables
let activeTab = "todo";  // todo, completed
let tasks = [];

// DOM variables
let tabTodo = document.querySelector(".tab-todo");
let tabCompleted = document.querySelector(".tab-completed");
let btnClear = document.querySelector("#btn-clear");
let btnAdd = document.getElementById("btn-add");
let txtAdd = document.getElementById("txt-add");
let taskList = document.getElementById("task-list");
let btnDelete = document.querySelectorAll(".btn-left");



// Add a new task to the array
function addTask(taskDescription) {

  // Create object for the new task
  let newTask = {
    "id": Date.now(),
    "description": taskDescription,
    "status": "active",
  };

  // Add new task to the tasks array
  tasks = [...tasks, newTask];

  // Clear the input text field
  document.getElementById('txt-add').value = "";

  // If in todo view, add new task to the DOM
  if (activeTab === "todo") {
    displayNewTask(newTask);
  }
}



// Display a newly created task
function displayNewTask(newTask) {
  let taskLi = document.createElement("li");
  taskLi.id = newTask.id;

  // Create left Delete button
  let taskBtnLeft = document.createElement("button");
  taskBtnLeft.classList.add("btn-left");
  taskBtnLeft.textContent = "Delete";
  taskBtnLeft.addEventListener("click", (e) => {handleDelete(e)});

  // Create right Complete button
  let taskBtnRight = document.createElement("button");
  taskBtnRight.classList.add("btn-right");
  taskBtnRight.textContent = "Complete"
  taskBtnRight.addEventListener("click", (e) => {handleComplete(e)});

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



// Delete button pressed
function handleDelete(e) {

  // Delete item from the DOM
  let deleteItem = document.getElementById(e.target.parentNode.id);
  taskList.removeChild(deleteItem);

  // Delete item from the array
  tasks = tasks.filter(task => task.id != e.target.parentNode.id);
}



// Todo button pressed
function handleTodo(e) {

  // Delete item from the DOM
  let todoItem = document.getElementById(e.target.parentNode.id);
  taskList.removeChild(todoItem);

  // Update status in array to active
  tasks.forEach( (task, index) => {
    if (task.id == e.target.parentNode.id) {
      tasks[index].status = "active";
    }
  });
}



// Complete button pressed
function handleComplete(e) {
  // Delete item from the DOM
  let deleteItem = document.getElementById(e.target.parentNode.id);
  taskList.removeChild(deleteItem);

  // Set the task to completed in the array
  tasks.forEach( (task, index) => {
    if (task.id == e.target.parentNode.id) {
      tasks[index].status = "completed";
    }
  });
}



// Clear button pressed
btnClear.addEventListener("click", () => {
  document.getElementById('txt-add').value = "";
});



// Add button pressed
btnAdd.addEventListener("click", () => {
  let taskDescription = document.getElementById("txt-add").value
  if (taskDescription != "") {
    addTask(taskDescription);
  }
});



// Todo tab pressed
tabTodo.addEventListener("click", () => {
  activeTab = "todo";

  // Update display to show Todo as active tab
  activeTab = "todo";
  tabTodo.classList.add("tab-active");
  tabCompleted.classList.remove("tab-active");

  // Clear the todo items from the DOM
  while (taskList.hasChildNodes()) {
    taskList.removeChild(taskList.lastChild);
  }

  // Display all the active tasks
  tasks.forEach( (task, index) => {
    if (task.status == "active") {
      let taskLi = document.createElement("li");
      taskLi.id = task.id;

      // Create left Delete button
      let taskBtnLeft = document.createElement("button");
      taskBtnLeft.classList.add("btn-left");
      taskBtnLeft.textContent = "Delete";
      taskBtnLeft.addEventListener("click", (e) => {handleDelete(e)});

      // Create right Todo button
      let taskBtnRight = document.createElement("button");
      taskBtnRight.classList.add("btn-right");
      taskBtnRight.textContent = "Complete"
      taskBtnRight.addEventListener("click", (e) => {handleComplete(e)});

      // Create the textbox
      let taskTextbox = document.createElement("input");
      taskTextbox.classList.add("txt-input");
      taskTextbox.type = "text";
      taskTextbox.value = task.description;

      // Add items to the li
      taskLi.appendChild(taskBtnLeft);
      taskLi.appendChild(taskTextbox);
      taskLi.appendChild(taskBtnRight);

      // Add li to the ul
      taskList.appendChild(taskLi);
    }
  });
});



// Completed tab pressed
tabCompleted.addEventListener("click", () => {
  activeTab = "completed";

  // Update display to show Completed as active tab
  activeTab = "completed";
  tabCompleted.classList.add("tab-active");
  tabTodo.classList.remove("tab-active");

  // Clear the todo items from the DOM
  while (taskList.hasChildNodes()) {
    taskList.removeChild(taskList.lastChild);
  }

  // Display all the completed tasks
  tasks.forEach( (task, index) => {
    if (task.status == "completed") {
      let taskLi = document.createElement("li");
      taskLi.id = task.id;

      // Create left Delete button
      let taskBtnLeft = document.createElement("button");
      taskBtnLeft.classList.add("btn-left");
      taskBtnLeft.textContent = "Delete";
      taskBtnLeft.addEventListener("click", (e) => {handleDelete(e)});

      // Create right Todo button
      let taskBtnRight = document.createElement("button");
      taskBtnRight.classList.add("btn-right");
      taskBtnRight.textContent = "Todo"
      taskBtnRight.addEventListener("click", (e) => {handleTodo(e)});

      // Create the textbox
      let taskTextbox = document.createElement("input");
      taskTextbox.classList.add("txt-input");
      taskTextbox.type = "text";
      taskTextbox.value = task.description;

      // Add items to the li
      taskLi.appendChild(taskBtnLeft);
      taskLi.appendChild(taskTextbox);
      taskLi.appendChild(taskBtnRight);

      // Add li to the ul
      // let listUl = document.getElementById("task-list");
      taskList.appendChild(taskLi);
    }
  });
});