const newTask = document.getElementById("addButton");
const tasks = document.getElementById("taskWrapper");
const input = document.getElementById("input");
const clearTasks = document.getElementById("clearButton");
const clearCompletedTasks = document.getElementById("clearCompletedButton")

checkNewInput();
clear();
clearCompleted()

function checkNewInput() {
  newTask.addEventListener("click", function () {
    if (checkNonEmpty()) {
      addTask();
    }
  });
}

function addTask() {
  var task = document.createElement("div");
  var text = input.value;
  task.innerHTML =
    '<img id="uncheck" src="images/UncheckedCircle.png" alt="" /><p id="text">' +
    text +
    "</p>";
  task.id = "task";
  task.className = "task-class";
  tasks.appendChild(task);
  input.value = "";
  checkCompletedTask(task, text);
}

function checkCompletedTask(task, text) {
  task.addEventListener("click", function () {
    task.innerHTML =
      '<img id="check" src="images/Checkmark.png" alt="" /><p id="text"><s>' +
      text +
      "</s></p>";
    task.id = "completed-task"
  });
}

function clear() {
  clearTasks.addEventListener("click", function () {
    while (tasks.firstChild) {
      tasks.removeChild(tasks.firstChild);
    }
  });
}

function clearCompleted() {
  clearCompletedTasks.addEventListener("click", function () {
    while (document.getElementById("completed-task")){
    document.getElementById("completed-task").remove();
    }
  });
}

function checkNonEmpty() {
  if (input.value == "") {
    return false;
  } else {
    return true;
  }
}